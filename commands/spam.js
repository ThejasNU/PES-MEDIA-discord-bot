module.exports = {
	name: "spam",
	description: "spams with the number and content given",
	async execute(message, args) {
    // const userID = ['<@793111567184297985>','<@760161883336081408>','<@764118123330273330>'];
		if (message.author.id === '793111567184297985' || message.author.id === '760161883336081408' || message.author.id === '764118123330273330') {
            let num = args[1];
            let content = args[0];
            if(!args[0] || !args[1] ){
              await message.channel.send("Give proper arguments Like this");
               await message.channel.send("`$spam content number`");
            }
            else {
            for(var i = 0;i < num;i++){
                await message.channel.send(content);
            }
            }
			
		} else {
			await message.channel.send(
				"You don't have permission to use this command");
		}
	}
};