import './logger'

import { Context, Telegraf } from 'telegraf'

import { TG_TOKEN, WEB_APP_URL } from './config'
import { Consumer } from './Consumer'
import { Admin } from './Admin'

import { setMenuButton } from './utils/init'

const bot = new Telegraf(TG_TOKEN)
const consumer = new Consumer(bot)
const admin = new Admin(bot)

bot.use(async (ctx, next) => {
    // middleware
    return next()
})


bot.start(async (ctx: Context) => {
    // admin.activate(ctx)
    consumer.activate(ctx)
})

bot.launch().then(() => setMenuButton(bot))

console.info('The Bot is successfully started! Please, double check valuable envs!')
console.info(
    `Environments:
    TG_TOKEN: ${TG_TOKEN}
    WEB_APP_URL: ${WEB_APP_URL}
    `,
)
