import { Context } from "telegraf";
import { logError } from "../messages/errors";
import ChatController from "../Controllers/ChatController";
import UserController from "../Controllers/UserController";

export async function ensureChatAndUser(ctx: Context, next: () => any) {
  try {
    const chatId = ctx.chat?.id;
    const userId = ctx.from?.id;
    const username = ctx.from?.username;

    if (!chatId || !userId || !username) {
      logError("Chat or user info is missing");
      return;
    }

    await ChatController.create(chatId);
    await UserController.create(userId, username, chatId)

    return next();
  } catch (error: any) {
    logError("Error in ensureChatAndUser middleware", error.message);
  }
}