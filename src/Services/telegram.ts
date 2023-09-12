import { Context, Telegraf } from "telegraf";
import config from "./config";
import { loadUserData } from "../methods/loadUserData";
import { IMiddlewareUser } from "../types/types";
import { saveUserData } from "../methods/saveUserData";
const fs = require("fs");

if(!process.env.TOKEN) {
  throw new Error("Telegram token is required");
}

const bot = new Telegraf(process.env.TOKEN);

let userData: any = {};

if (fs.existsSync('user_data.json')) {
  userData = JSON.parse(fs.readFileSync('user_data.json', 'utf8'));
}

bot.use((ctx: Context, next) => {
  try {
    const userData: Record<string, IMiddlewareUser> = loadUserData();
    const userId = ctx.from?.id;

    if (!userId) {
      throw new Error("User ID is undefined");
    }

    const currentTime = Date.now();
    const user = userData[userId] || {
      timestamp: 0,
      messageCount: 0,
      timeLimit: config.COMMAND_INTERVAL,
      consecutiveCommands: 0,
      blockedUntill: 0
    }

    if (currentTime - user.timestamp < config.COMMAND_INTERVAL) {
      return;
    }

    user.timestamp = currentTime;
    user.messageCount++;

    userData[userId] = user
    saveUserData(userData);

    next();
  } catch (error) {
    console.error("Error with middleware: " + error.message);
  }

})

export default bot;


