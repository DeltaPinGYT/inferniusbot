import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class help implements IBotCommand {

    private readonly _command = "help"

    help(): string {
        return "This command brings up the help page";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {


        let helpEmbed = new Discord.RichEmbed()
        .setColor('#efff00')
        .setTitle('List of all the commands')
        .addField("!av","Displays the mentioned user's avatar")
        .addField("!ban","bans the mentioned user owo")
        .addField("!bc","Clears all the bots's messages")
        .addField("!buy","Buys a specific item from the storage if you have enough $!")
        .addField("!clear","Clears all the mentioned user's messages")
        .addField("!help","Brings up the help embed")
        .addField("!info","Displays some info about the server")
        .addField("!kick","kicks the mentioned user owo")
        .addField("!money","Displays the user's account balance")
        .addField("!poll","Creates a poll")
        .addField("!purge","Deletes ALL messages in chat")
        .addField("!kiss","Gives the mentioned user a smooch uwu")
        .addField("!fuck","Fucks the mentioned user!")
        .addField("!greg","Greg")
        .addField("!inv","Displays the user's inventory")
        .addField("!mute","Mutes the mentioned user owo")
        .addField("!gamble","Randomly chooses a number between 0 and 100")
        .addField("!unfuck","Revert your fucking!")
        msgObject.channel.send(helpEmbed)
        msgObject.delete(0);
    }}