import type { Telegraf } from 'telegraf'
import { WEB_APP_URL } from '../config'

export async function setMenuButton(bot: Telegraf) {
    await bot.telegram.setChatMenuButton({
        menuButton: {
            type: 'web_app',
            text: 'Play Game!',
            web_app: {
                url: WEB_APP_URL,
            },
        },
    })
}
