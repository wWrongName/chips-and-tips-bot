import type { Context, Telegraf } from 'telegraf'
import { BaseUser } from './BaseUser'
import { admin } from './messages/admin'
import { TG_ADMIN_ID } from './config'

export class Admin extends BaseUser {
    public activate(ctx: Context) {
        const { id, username } = this.getSenderDataFromContext(ctx)

        if (String(id) !== String(TG_ADMIN_ID))
            return

        ctx.reply(admin(username))
    }
}
