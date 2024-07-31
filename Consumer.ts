import { TG_CHIPS_AND_TIPS_CHAT_URL, WEB_APP_URL } from './config'

import { Markup, type Context } from 'telegraf'
import { BaseUser } from './BaseUser'

import { greetings } from './messages/greetings'
import { keyboard } from './messages/keyboard'
import { invite } from './messages/invite'
import { earn } from './messages/earn'

const actions = {
    earn: 'earn',
    invite: 'invite',
}

const markupKeyboard = [
    [Markup.button.webApp(keyboard.play, WEB_APP_URL)],
    [Markup.button.url(keyboard.subscribe, TG_CHIPS_AND_TIPS_CHAT_URL)],
    [Markup.button.callback(keyboard.earn, actions.earn)],
    [Markup.button.switchToChat(keyboard.invite, invite())],
]

export class Consumer extends BaseUser {
    public activate(ctx: Context) {
        const { username } = this.getSenderDataFromContext(ctx)

        ctx.reply(greetings(username), Markup.inlineKeyboard(markupKeyboard))

        this.bot.action(actions.earn, (ctx: Context) => {
            ctx.reply(earn())
            ctx.answerCbQuery()
        })
    }
}
