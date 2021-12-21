module.exports = {
	name: "spam",
	description: "spams with the number and content given",
	async execute(message, args) {
		if (message.author.id === '793111567184297985' || message.author.id === '760161883336081408' || message.author.id === '764118123330273330') {
            let len=args.length;
            let num = args[len-1];
            let content = "";
            for (let i = 0; i < (len-1); i++) {
			    content = content + " " + args[i];
	    	}
            if(isNaN(args[len-1])){
                await message.channel.send("Give proper arguments Like this");
                await message.channel.send("`$spam content number`");
                await message.channel.send("Make sure that last argument is **number**")
            }
            else{
                num=Number(num)
                for(let i = 0;i < num;i++){
                    await message.channel.send(content);
                }
            }
		} else {
			await message.channel.send(
				"Hehe, You don't have permission to use this command");
		}
	}
};
