module.exports = {
	name: "assemble",
	description: "This calls my discord gang",
	async execute(message, args) {
		if (message.member.roles.cache.has("834694539142103041")) {
			await message.channel.send("***Avengers, ASSEMBLE***");
			await message.channel.send(
				"<@699646699177639936> <@764118123330273330>  <@760161883336081408> <@738685698206597171> <@793111567184297985>"
			);
		} else {
			await message.channel.send(
				"You don't have permission to use this command"
			);
		}
	},
};
