import { bold } from 'telegraf/format'

export const greetings = (username: string) =>
    bold(`
안녕하세요 @${username}

Chips and Tips에 오신 것을 환영합니다 🍟 🌏

플레이. 감상. 수익.

Chips the Pug와 함께 전 세계의 맛있는 모험에 참여하세요!

💰 $TIPS를 얻으려면 탭하고 글로벌 요리를 탐험하며 기술을 업그레이드하세요.

💌 더 많은 보상을 위해 친구를 초대하는 것을 잊지 마세요.

⭐️ $TIPS를 Airdrop 토큰으로 교환하고 흥미로운 보상을 받으세요.

요리를 시작합시다! 🍽️✨
`)
