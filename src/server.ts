import { Context } from "telegraf";
import { DEFAULT_MESSAGES } from "./messages/default";
import { errorHandling } from "./middleware/errorHandling";
import { menu } from "./commands/menu/menu";


const dotenv = require("dotenv");
const bot = require("bot");


dotenv.config();

try {
  bot.start((ctx: Context) => {
    ctx.reply(DEFAULT_MESSAGES.start)
  })

  bot.help((ctx: Context) => {
    ctx.reply(DEFAULT_MESSAGES.help);
  })

  bot.command("menu", errorHandling(menu));

} catch(err) {
  console.log("Error init: " + err);
}