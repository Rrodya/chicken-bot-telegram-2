import { Context, Markup } from "telegraf";

const mainMenu = Markup.keyboard([
  ['/penis', '/top'],
  ['/topObrez', '/protect']
]).resize();


export const menu = async (ctx: Context) => {
  ctx.reply('', mainMenu);
}