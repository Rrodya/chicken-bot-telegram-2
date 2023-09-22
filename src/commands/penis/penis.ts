import { Context } from "telegraf";
import PenisController from "../../Controllers/PenisController";

export const penis = async (ctx: Context) => {
  const id = ctx.message?.from.id;
  const login = ctx.message?.from.username;
  const chatId = ctx.chat?.id;

  if (!chatId || id || login) {
    throw new Error("Chat or user not found");
  }

  const ans: any = await PenisController.updateLength(chatId, id)

  console.log(ans);


  //async logic

}