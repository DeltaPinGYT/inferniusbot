import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import * as db from "quick.db";
import { IBotCommand } from "./api";
import { isNull } from "util";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

client.on("ready", () => {

    let allUsers = client.users.array();
    for(let i = 0; i < allUsers.length; i++){
        if(isNull(db.get(allUsers[i].id))){
            db.set(allUsers[i].id, {money: 50, items: [] })
        }
    }

    //Display that we're online
    console.log("im ready");
    client.on("message", message => {
        client.user.setGame("Hell", "https://www.twitch.tv/noobyninjq")
    });
})

client.on('guildMemberAdd', member => {

    let memberRole = member.guild.roles.find(role => role.id == "562270224909336576");
    member.addRole(memberRole);

    member.send("Thank you for participating in agony!");

    if (isNull(db.get(member.id))) {
        db.set(member.id, { money: 50, items: [] })
    }
})

client.on("guildMemberRemove", member => {
    
})

client.on("message", msg => {

    //Ignore the message if it was sent by the bot
    if (msg.author.bot) { return; }

    //Ignore the message if it was sent in dms
    if (msg.channel.type == "dm") { return; }

    //Ignore messages that don't start with the prefix
    if (!msg.content.startsWith(ConfigFile.config.prefix)) { return; }

    //Handle the command
    handleCommand(msg);
})

async function handleCommand(msg: Discord.Message) {

    //Split the string into the command and all of the args!
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "").toLowerCase();
    let args = msg.content.split(" ").slice(1);

    //Loop through all of our commands
    for (const CommandsClass of commands) {

        //Attempt to execute code but ready in case of a crash
        try {

            //Check if our command class is correct.
            if (!CommandsClass.isThisCommand(command)) {

                //Go to the next iteration of the loop if it is not correct.
                continue;
            }

            //Pause execution whilst we run the command's code
            await CommandsClass.runCommand(args, msg, client);
        }
        catch (exception) {

            //If there is an error then log it
            console.log(exception);
        }
    }
}

function loadCommands(commandsPath: string) {

    //Exit if there are no commands
    if (!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) { return; }

    //Loop through all of the commands in our config file
    for (const commandName of ConfigFile.config.commands as string[]) {

        const CommandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new CommandsClass() as IBotCommand;

        commands.push(command);
    }
}

client.login(ConfigFile.config.token);