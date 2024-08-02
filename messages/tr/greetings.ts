import { bold } from 'telegraf/format'

export const greetings = (username: string) =>
    bold(`
Merhaba @${username}

Chips and Tips'e hoş geldiniz 🍟 🌏

OYNAYIN. İZLEYİN. KAZANIN.

Chips the Pug ile dünya çapında lezzetli bir maceraya katılın!

💰 $TIPS kazanmak için dokunun, küresel mutfakları keşfedin ve becerilerinizi geliştirin.

💌 Daha fazla ödül için arkadaşlarınızı davet etmeyi unutmayın.

⭐️ $TIPS'lerinizi Airdrop token'ları ile değiştirin ve heyecan verici ödüller kazanın.

Hadi yemek yapalım! 🍽️✨
`)
