const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

const prefix = "$";

//Reading commands from different files
const fs = require("fs");
client.commands = new Discord.Collection();
const commandFiles = fs
	.readdirSync("./commands/")
	.filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//onready event
client.once("ready", () => {
	console.log("Bot is online");
});

client.on("message", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) {
		return;
	}
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "ping") {
		client.commands.get("ping").execute(message, args);
		//message.channel.send("pong!")
	}
});

const TOKEN = process.env.TOKEN;
client.login(TOKEN);
