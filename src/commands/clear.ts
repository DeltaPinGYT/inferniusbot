import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class clear implements IBotCommand {

    private readonly _command = "clear"

    help(): string {
        return "This command deletes the mentioned user's messages.";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        msgObject.delete(0);
        let mentionedUser = msgObject.mentions.users.first();
        msgObject.channel.fetchMessages().then(messages => {
            msgObject.channel.bulkDelete(messages.filter(m => m.author === mentionedUser));
        });
    }

}