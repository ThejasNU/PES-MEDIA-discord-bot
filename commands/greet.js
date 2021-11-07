module.exports = {
	name: "greet",
	description: "Greets the mentioned person with the entered greeting",
	async execute(message, args) {
		let greeting = "";
		for (let i = 1; i < args.length; i++) {
			greeting = greeting + " " + args[i];
		}
		await message.channel.send(`${greeting} ${args[0]}`);
	},
};