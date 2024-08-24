import { Client, GatewayIntentBits, Partials } from "discord.js";
const client = new Client({
  intents: 131071,
  Partials: [
    Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.User,
  ],
});

// Reply to a message

// Reply ====>   رد الرسالة
// channel.send ====>  ارسال رسالة الى الشات دوت رد

client.on("messageCreate", (message) => {
  if (message.content == "*ping") {
    message
      .reply(`ping`)
      .then(() => console.log(`Replied to message "${message.content}"`));
  }
});

// login
client
  .login("token")
  .then(() => {
    console.log("is work");
  })
  .catch(console.error);
// on or noton


