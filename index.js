// استيراد المكتبات اللازمة
import { Client, Partials } from "discord.js";
import dotenv from "dotenv";

// تهيئة dotenv لتحميل المتغيرات البيئية من ملف .env
dotenv.config();

// إنشاء كائن Client الذي يمثل البوت
const client = new Client({
  intents: 131071,
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.User,
  ],
});

// تسجيل الدخول باستخدام التوكن
client.login(process.env.TOKEN).then(() => {
  console.log("is work");
});

client.on("messageCreate", (message) => {
  if (message.content == "ping") {
    if (message.author.bot) return;
    console.log(12121212);
  }
});
