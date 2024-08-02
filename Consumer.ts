import { TG_CHIPS_AND_TIPS_CHAT_URL, WEB_APP_URL } from './config'

import { Markup, type Context } from 'telegraf'
import { BaseUser } from './BaseUser'

const actions = {
    earn: 'earn',
    invite: 'invite',
}

export class Consumer extends BaseUser {
    public activate(ctx: Context) {
        const { username, language_code } = this.getSenderDataFromContext(ctx)

        const {greetings} = require(`./messages/${language_code}/greetings`)
        const {keyboard} = require(`./messages/${language_code}/keyboard`)
        const {invite} = require(`./messages/${language_code}/invite`)
        const {earn} = require(`./messages/${language_code}/earn`)

        const markupKeyboard = [
            [Markup.button.webApp(keyboard.play, WEB_APP_URL)],
            [Markup.button.url(keyboard.subscribe, TG_CHIPS_AND_TIPS_CHAT_URL)],
            [Markup.button.callback(keyboard.earn, actions.earn)],
            [Markup.button.switchToChat(keyboard.invite, invite())],
        ]

        ctx.reply(greetings(username), Markup.inlineKeyboard(markupKeyboard))

        this.bot.action(actions.earn, (ctx: Context) => {
            ctx.reply(earn(), Markup.inlineKeyboard(markupKeyboard))
            ctx.answerCbQuery()
        })
    }
}
