import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class mute implements IBotCommand {

    private readonly _command = "mute"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let mentionedUser = msgObject.mentions.users.first();
        if(!msgObject.member.hasPermission("MANAGE_MESSAGES"))
        {
            msgObject.channel.send(`${msgObject.author.username}, you can't use this command!`)
        }
        if(!mentionedUser)
        {
            msgObject.channel.send(`${msgObject.author.username}, I can't find that user!`)
        }
        if(msgObject.member.hasPermission("MANAGE_MESSAGES"))
        {
        msgObject.channel.send(`${mentionedUser} has been muted!`)

    } 

}}