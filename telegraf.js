const { Telegraf } = require('telegraf');

const bot = Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome!'));

bot.help((ctx) => ctx.reply('Send me a message and I will echo it back to you.'));

bot.on('text', (ctx) => ctx.reply(`You said: "${ctx.message.text}"`));

bot.launch();


