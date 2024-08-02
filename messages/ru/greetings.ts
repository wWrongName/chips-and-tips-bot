import { bold } from 'telegraf/format'

export const greetings = (username: string) =>
    bold(`
Привет @${username}

Добро пожаловать в Chips and Tips 🍟 🌏

ИГРАЙ. СМОТРИ. ЗАРАБАТЫВАЙ.

Присоединяйтесь к Чипсу, мопсу, в вкусном приключении по всему миру!

💰 Нажмите, чтобы заработать $TIPS, изучайте мировую кухню и улучшайте свои навыки.

💌 Не забудьте пригласить друзей для получения дополнительных наград.

⭐️ Обменивайте свои $TIPS на токены Airdrop и получайте захватывающие награды.

Давайте готовить! 🍽️✨
`)
