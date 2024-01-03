import { Command, Ctx, Hears, Help, On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class BotService {
  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.reply('welcome');
  }

  @Help()
  async help(@Ctx() ctx: Context) {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async on(@Ctx() ctx: Context) {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hears(@Ctx() ctx: Context) {
    await ctx.reply('Hey there');
  }

  @Command('say_yo')
  async sayYo(@Ctx() ctx: Context) {
    await ctx.reply('Yo');
  }
}
