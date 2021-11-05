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
		message.channel.send(
			`Latency is ${
				Date.now() - message.createdTimestamp
			}ms. API Latency is ${Math.round(client.ws.ping)}ms`
		);
		//message.channel.send("pong!")
	} else if (command === "hello") {
		client.commands.get("hello").execute(message, args);
	} else if (command === "pride") {
		client.commands.get("pride").execute(message, args);
	} else if (command === "nick") {
		client.commands.get("nick").execute(message, args);
	} else if (
		command === "clear" ||
		command === "purge" ||
		command === "p" ||
		command === "c"
	) {
		client.commands.get("clear").execute(message, args);
	}
});

const TOKEN = process.env.TOKEN;
client.login(TOKEN);
