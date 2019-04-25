import * as Discord from "discord.js";
import { IBotCommand } from "../api";
let commands: IBotCommand[] = [];

export default class bc implements IBotCommand {

    private readonly _command = "bc"

    help(): string {
        return "This command deletes all the other bots's messages";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        msgObject.delete(0);
        if(!msgObject.member.hasPermission("MANAGE_MESSAGES"))
        msgObject.channel.send(`${msgObject.author.username} but you cannot use this command!`)

        if(msgObject.member.hasPermission("MANAGE_MESSAGES"))
        msgObject.channel.fetchMessages().then(messages => {
            msgObject.channel.bulkDelete(messages.filter(m => m.author.bot));
        });
    }

}