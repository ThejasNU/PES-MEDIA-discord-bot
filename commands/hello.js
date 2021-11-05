module.exports = {
	name: "hello",
	description: "Says hello in both dm as well as in server",
	async execute(message, args) {
		const user = message.member;
		await message.channel.send(`hello <@${user.id}>`);
		await message.member.send("hello,I hope you are doing good");
	},
};
