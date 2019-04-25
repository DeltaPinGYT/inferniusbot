import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class testCommand implements IBotCommand {

    private readonly _command = "kick"

    help(): string {
        return "(admin only) kicks mentioned user";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let mentionedUser = msgObject.mentions.users.first();
        msgObject.channel.send(`${mentionedUser} has been kicked! ☑👌`)
    }
}