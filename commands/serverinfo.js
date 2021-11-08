const { MessageEmbed } = require('discord.js');

module.exports = {

  name: "serverinfo",
  description: "Tells info about the server.",
async execute(message) {
		const embed = new MessageEmbed()
			.setDescription(`** __${message.guild.name}__ server info**`)
			.setColor('RANDOM')
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.addField('Owner', [
				` ${message.guild.owner.user.tag}`
			])
			.addField('Statistics', [
				` Member Count: ${message.guild.memberCount}`
			])
            .addField('Region', [
				` ${'India'}`
			])
			.setTimestamp();

		message.channel.send(embed);

	}

};

