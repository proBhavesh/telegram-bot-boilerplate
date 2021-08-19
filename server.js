//Default exports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { Telegraf } = require("telegraf");

//making passwords secure using .env
dotenv.config({ path: "./.env" });

//importing files
const routes = require("./api/routes/routes.js");
// const DB = require("./database/db.js");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.hears("hi", (ctx) => ctx.reply("Hey therebbbbbbbbbbbbbbbbbbbbbbbbb"));
bot.launch();

//initialising server
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(routes);

// starting the server
app.listen(process.env.PORT, () => {
    console.log(`
            ####################################
            🛡️  Server listening on port: ${process.env.PORT} 🛡️
            ####################################
        `);
});
