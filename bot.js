const axios = require('axios');

const { Telegraf } = require('telegraf');

require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const query = 'tornadonotes+filename:txt+updated:>2022-01-01';

let latestUpdateTime = '';

function searchGitHub() {

  axios.get(`https://api.github.com/search/code?q=${query}&per_page=5&updated=${latestUpdateTime}`)

    .then(response => {

      const results = response.data.items;

      if (results.length > 0) {

        latestUpdateTime = results[0].updated_at;

        results.forEach(result => {

          bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, `Result found: ${result.name}\nURL: ${result.html_url}`);

        });

      }

    })

    .catch(error => {

      console.log(error);

    });

}

bot.start((ctx) => {

  ctx.reply('Welcome to the GitHub bot! I will send you new search results every 2 hours.');

  searchGitHub();

  setInterval(searchGitHub, 2 * 60 * 60 * 1000); // Run the search every 2 hours

});

bot.launch();

