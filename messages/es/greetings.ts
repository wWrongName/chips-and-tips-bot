import { bold } from 'telegraf/format'

export const greetings = (username: string) =>
    bold(`
Hola @${username}

Bienvenido a Chips and Tips 🍟 🌏

JUEGA. MIRA. GANA.

¡Únete a Chips the Pug en una deliciosa aventura por el mundo!

💰 Toca para ganar $TIPS, explora cocinas globales y mejora tus habilidades.

💌 No olvides invitar a amigos para obtener más recompensas.

⭐️ Intercambia tus $TIPS por tokens Airdrop y obtén recompensas emocionantes.

¡Vamos a cocinar! 🍽️✨
`)
