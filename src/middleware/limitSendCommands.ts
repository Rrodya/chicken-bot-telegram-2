import { loadUserData } from "../methods/loadUserData";
import { IMiddlewareUser } from "../types/types";
import { saveUserData } from "../methods/saveUserData";
import { Context } from "telegraf";
import config from "../Services/config";


export function limitSendCommands(ctx: Context, next: any) {
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
  } catch (error: any) {
    console.error("Error with middleware: " + error.message);
  }
}