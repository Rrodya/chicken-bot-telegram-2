import { Context } from "telegraf";
import { DEFAULT_MESSAGES } from "./messages/default";
import { errorHandling } from "./middleware/errorHandling";
import { menu } from "./commands/menu/menu";
import { penis } from "./commands/penis/penis"
import bot from "./Services/telegram"

const dotenv = require("dotenv");



dotenv.config();

try {
  bot.start((ctx: Context) => {
    ctx.reply(DEFAULT_MESSAGES.start)
  })

  bot.help((ctx: Context) => {
    ctx.reply(DEFAULT_MESSAGES.help);
  })

  bot.command("menu", errorHandling(menu));

  bot.command("penis", errorHandling(penis));

  bot.launch();
} catch(err) {
  console.log("Error init: " + err);
}