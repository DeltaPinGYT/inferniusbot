import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class nick implements IBotCommand {

    private readonly _command = "nick"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let member = msgObject.mentions.users.first();
        let name = msgObject.content.split(' ').slice(1)
        let memoriam = msgObject.author.username || msgObject.member.nickname

        if(!msgObject.member.hasPermission("MANAGE_ROLES"))
        msgObject.channel.send(`${memoriam} but you cannot use this command! You need manage_nickname permission!`)

        if(msgObject.member.hasPermission("MANAGE_ROLES"))
        member.setNickname(name)

    }

}