module.exports = {
	name: "ping",
	description: "This is a ping command",
	async execute(message, args) {
		await message.channel.send("pong!🏓");
	},
};
