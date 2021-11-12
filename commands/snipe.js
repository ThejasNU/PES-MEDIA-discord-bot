const { MessageEmbed } = require('discord.js');


module.exports = {
  name: "snipe",
  description: "Get last message which is deleted",
  async execute(client, message) {
    
    const msg = client.snipes.get(message.channel.id);
    if(!msg) return message.channel.send("There's nothing to snipe!");
    const embed = new MessageEmbed()
    .setAuthor(msg.author)
    .setDescription(msg.content)
    if(msg.image)embed
    .setImage(msg.image)
    .setColor("RANDOM")
    .setTimestamp();
    
    message.channel.send(embed);
   
  },
};