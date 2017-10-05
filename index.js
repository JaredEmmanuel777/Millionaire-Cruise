const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./botsettings.json");
const token = config.token;
const prefix = config.prefix;

// Logs in console
client.on('ready', () => {
	client.user.setGame("$help");
	console.log(`Logged in as ${client.user.tag}!`);
});

// Rules
client.on('message', msg => {
	if (msg.content.startsWith(prefix + 'rules')) {
		msg.channel.send({embed: {
			color: 3447003,
			author: {
				name: client.user.username,
			},
			title: "RULES",
			description: "Anyone who disobeys the rules two times will be given a warning. If furthermore disobey the rules once, that person will lose the verified role, and therefore, cannot participate in any game until three days.",
			fields: [{
				name: "Rule #1",
				value: "Treat others the way you want to be treated. Be polite and respectful to others."
			},
			{
				name: "Rule #2",
				value: "No swearing or insulting anyone. I would like this server to have polite conversation."
			},
			{
				name: "Rule #3",
				value: "No racism or anything like that."
			},
			{
				name: "Rule #4",
				value: "No posting pictures or websites that have 'bad influence' or something like that. "
			},
			{
				name: "Rule #5",
				value: "No spamming. Especially on the bot. This might lead the bot to crash. Ping spamming is also not allowed under any circumstances. It could be annoying."
			},
			{
				name: "Rule #6",
				value: "No talking to anyone on other servers or through DM for advise during the game. Players are also not allowed to talk to each other on DM(or something like that) about the game while playing it. It could be unfair to other players participating the game."
			},
			{
				name: "Rule #7",
				value: "That's all. I really do hope you like playing here. Please have fun! :wink: "
			}],
			timestamp: new Date(),
			footer: {
				icon_url: client.user.avatarURL,
				text: "© Jared Emmanuel"
			}
		}})
		console.log(msg.author.username + " just called the $rules command " + " in " + msg.guild.name);
	}
});

// Story
client.on('message', msg => {
	if (msg.content.startsWith(prefix + 'story')) {
		msg.channel.send({embed: {
			color: 3447003,
			author: {
				name: client.user.username,
			},
			title: "Story",
			description: "",
			fields: [{
				name: "Story",
				value: "A group of millionaires decided to celebrate their success in a cruise. All of them have various professions. All of the miilionaires are well known. Meanwhile, during the journey in the sea, the ship stopped suddenly, and all radio contact and other means of communications have been shut down through a jamming device. While all the people discuss the matter on the ship's deck, a loud call was heard, 'The ship is under our control. To gain back the ship, give us all your bank accounts.' All the people rushed to the ship's cockpit, only to find it empty. They decided not to give their bank accounts and that perhaps they could locate the jammer and call for help. The search started. They then discovered that during the night, one person after another disappeared. The bad guys could be anyone. It's up to you to bring them to justice!"
			}],
			timestamp: new Date(),
      	footer: {
      		icon_url: client.user.avatarURL,
      		text: "© Jared Emmanuel"
    	}
		}})
		console.log(msg.author.username + " just called the $story command " + " in " + msg.guild.name);
	}
});

// Help
client.on('message', msg => {
  	if (msg.content.startsWith(prefix + 'help')) {
    	msg.channel.send({embed: {
      	color: 3447003,
      	author: {
      	name: client.user.username,
    	},
      	title: "Help",
      	description: "Help list.",
    	fields: [{
			name: "$credits",
			value: 'Credits.'
		},
       	{
        	name: "Manager commands.",
        	value: "Commands that can only be accessed by game managers, and of course, members with higher ranks:"
      	},
		{
        	name: "$openGame",
        	value: "Opens a new game."
    	},
      	{
        	name: "$startGame",
        	value: "Starts current game."
      	},
      	{
         	name:"$closeGame",
         	value:"Closes current game."
      	},
      	{
         	name: "In game commands.",
         	value: "Commands that are used during the game:"
      	},
      	{
     		name: "$say [message]",
        	value: "Sends a message to everyone."
      	},
      	{
        	name: "$whisper [player ID] [message]",
        	value: "Whispers to other players."
      	},
      	{
         	name: "$attack [player ID]",
         	value: "Attacks other players. Optional only for roles that can attack."
      	},
      	{
         	name: "$vote [player ID]",
         	value: "Votes the player for suspicion."
      	},
      	{
         	name: "$guilty",
         	value: "Marks the person in trial as guilty."
      	},
      	{
         	name: "$innocent",
         	value: "Marks the person in trial as innocent."
      	}],
      	timestamp: new Date(),
      	footer: {
      		icon_url: client.user.avatarURL,
      	  	text: "© Jared Emmanuel"
    	}
	 	}
	});

	console.log(msg.author.username + " just called the $help command " + " in " + msg.guild.name);
  }
});

// Roles
client.on('message', msg => {
	if (msg.content.startsWith(prefix + 'roles')) {
		msg.channel.send({embed: {
			color: 3447003,
			author: {
				name: client.user.username,
			},
			title: "Roles",
			description: "Millionaire Cruise roles.",
			fields: [{
				name: "Innocent roles",
				value: "People with good intentions."
			},
			{
				name: "Captain",
				value: "Captain of the ship. Can target people. And is resposible for the crew and the passenger's safety."
			},
			{
				name: "Lawyer",
				value: "Knows about the law. Cannot target anyone, but can vote two times and can vote himself/herself as innocent in a trial."
			},
			{
				name: "Detective",
				value: "Can get information about a suspect. To do it, use the target command. Detective cannot kill anyone."
			},
			{
				name: "Businessman",
				value: "A passenger. Cannot target anyone."
			},
			{
				name: "Bodyguard",
				value: "If anyone targets a businessman, the bodyguard automatically becomes the targeted person. You can only target a businessman when all the bodyguards are gone. A bodyguard can also target other people."
			},
			{
				name: "Ship crew, or sailor.",
				value: "Acts like a bodyguard, but instead of protecting businessmen, the ship crew protects the captain. The ship crew cannot target anyone."
			},
			{
				name: "First mate",
				value: "Acts like a ship crew, but can target other people."
			},
			{
				name: "Double-faced roles.",
				value: "Can either be good or bad or works for both. Be wary!"
			},
			{
				name: "Chef",
				value: "Can target someone during via poison. Uses the target command."
			},
			{
				name: "Spy",
				value: "Can target anyone. Be very wary!"
			},
			{
				name: "Agent",
				value: "Can target anyone. Can be either good or bad."
			},
			{
				name: "Doctor",
				value: "Has both good and bad intentions. Can target anyone."
			},
			{
				name: "Security guard",
				value: "Can target anyone. Security guards in this game is in the double-faced list because they can be bribed."
			},
			{
				name: "Actor",
				value: "Excellent at acting. Could fool a person easily. Could also target anyone."
			},
			{
				name: "Enemy roles.",
				value: "Roles that are the enemies."
			},
			{
				name: "Terrorist.",
				value: "Can target anyone, but will be killed in the process."
			},
			{
				name: "Assassin",
				value: "Very crafty people. Can target anyone."
			},
			{
				name: "Robber",
				value: "Cannot target anyone. Acts like a bodyguard but protects the ringleader."
			},
			{
				name: "Highjacker",
				value: "Can target anyone, but only once every two days."
			},
			{
				name: "Ringleader",
				value: "The mastermind. Can target anyone."
			}],
			timestamp: new Date(),
      		footer: {
      			icon_url: client.user.avatarURL,
      			text: "© Jared Emmanuel"
    		}
		}})
		console.log(msg.author.username + " just called the $roles command " + " in " + msg.guild.name);
	}
});

// Credits
client.on('message', msg => {
	if (msg.content.startsWith(prefix + 'credits')) {
    	msg.channel.send({embed: {
       	 	color: 3447003,
      	 	author: {
      		  	name: client.user.username,
    	   	},
       	 	title: "Credits",
         	description: "To all the people who inspired me and helped me with the BOT code. Thank you very much!!!",
    	   	fields: [{
			    //name: "",
			    //value: "For most of the BOT code and for the inspiration from his game, 'Maussaleum Mansion'. Many thanks to Temp."
		    },
		    {
        	   name: "Programming Robot#5881",
        	   value: "For helping me with the help code in a BOT which I used for this BOT. I really appreciate it!"
      	 	}],
         	timestamp: new Date(),
         	footer: {
      	      	icon_url: client.user.avatarURL,
      	      	text: "© Jared Emmanuel"
    	   }
	    }
	});

	console.log(msg.author.username + " just called the $credits command " + " in " + msg.guild.name);
  }
});


/*----------------------------------------------------------------------------*/
/*                     MAIN CODE (CODE FOR GAME FUNCTION)                     */
/*----------------------------------------------------------------------------*/

client.on('message', msg => {});


client.login(token);
