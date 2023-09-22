import { Context, Telegraf } from "telegraf";
import { limitSendCommands } from "../middleware/limitSendCommands";
import { ensureChatAndUser } from "../middleware/ensureChatAndUser";
require("dotenv").config();

const fs = require("fs");

if(!process.env.TOKEN) {
  throw new Error("Telegram token is required");
}

const bot = new Telegraf(process.env.TOKEN);

let userData: any = {};

if (fs.existsSync('user_data.json')) {
  userData = JSON.parse(fs.readFileSync('user_data.json', 'utf8'));
}

bot.use(limitSendCommands)
bot.use(ensureChatAndUser)

export default bot;


