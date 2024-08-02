import { bold } from "telegraf/format";

export const admin = (username: string) => bold(`
👋 Hi @${username}!

🎉 Welcome, Admin! 🎉

As an administrator of this bot, you have exclusive capabilities to manage content and engage with our community. Here are some of the things you can do:

📝 *Write and Publish News*: Keep our users updated by writing and publishing news directly to the bot and channels.

📊 *View Statistics*: Monitor user engagement and track the performance of your posts.

🔧 *Manage Settings*: Customize bot settings to enhance user experience.

📢 *Broadcast Messages*: Send important announcements and updates to all users instantly.


🚀 Let's get started!
`)