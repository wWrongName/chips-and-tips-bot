import type { Context, Telegraf } from 'telegraf'
import { BaseUser } from './BaseUser'

import { TG_ADMIN_ID } from './config'

export class Admin extends BaseUser {
    public activate(ctx: Context) {
        const { id, username, language_code } = this.getSenderDataFromContext(ctx)

        if (String(id) !== String(TG_ADMIN_ID))
            return

        const {admin} = require(`./messages/${language_code}/admin`)

        ctx.reply(admin(username))
    }
}
