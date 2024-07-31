import type { Context, Telegraf } from 'telegraf'
import type { User } from 'telegraf/types'
import { parse } from './utils/parser'

export class BaseUser {
    protected bot: Telegraf

    constructor(bot: Telegraf) {
        this.bot = bot
    }

    protected getSenderDataFromContext(ctx: Context) {
        const sender: User = ctx.message!.from
        return parse.senderData(sender)
    }
}
