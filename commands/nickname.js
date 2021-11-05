module.exports = {
	name: "nick",
	description: "It is used to change nicknames",
	async execute(message, args) {
		if (message.member.permissions.has("CHANGE_NICKNAME")) {
			await message.channel.send("You have perms to change nicknames");
		} else {
			await message.channel.send(
				"You do not have perms to change nicknames"
			);
		}
	},
};
