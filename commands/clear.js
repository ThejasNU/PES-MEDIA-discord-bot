module.exports = {
	name: "clear",
	aliases: ["purge", "p", "c"],
	description: "Clears the specified number of messages",
	async execute(message, args) {
		if (message.member.roles.cache.has("834694539142103041")) {
			if (!args[0]) {
				return message.reply(
					"Please enter the number of messages to be purged"
				); //If I don't put return here, it will send the below messages also
			}
			if (isNaN(args[0])) {
				return message.reply(
					"Do you have brain? If you really have, stfu and enter a number"
				);
			}
			if (args[0] > 100) {
				return message.reply("You cannot delete more than 100 messages");
			}
			if (args[0] < 1) {
				return message.reply(
					"You think you think you are smart eh? You cannot break me by entering such bad numbers, STFU and enter a number greater than or equal to 1"
				);
			}
			let amount = parseInt(args[0]) + 1;
			await message.channel.messages
				.fetch({ limit: amount })
				.then((messages) => message.channel.bulkDelete(messages));
		}else{
			await message.channel.send("You donot have perms to purge");
		}
		
	},
};
