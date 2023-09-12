import { Context } from "telegraf";
import { ERROR_MESSAGES } from "../messages/errors";

export const errorHandling = (fn: (ctx: Context) => Promise<any>) => {
  return async (ctx: Context) => {
    try {
      await fn(ctx);
    } catch (error) {
      console.log("Error:", error);
      ctx.reply(ERROR_MESSAGES.default_error);
    }
  }
}