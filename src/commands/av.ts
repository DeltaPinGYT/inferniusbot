import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class av implements IBotCommand {

    private readonly _command = "av"

    help(): string {
        return "lol";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        msgObject.delete();
        let id = args[0];
        let user = msgObject.mentions.users.first() || client.users.get(id) || msgObject.author;

        if(!user) return;
        let embed = new Discord.RichEmbed()
        .setColor('#efff00')
        .setDescription('EW')
        .setImage(`${user.avatarURL}`)
        msgObject.channel.send(embed)
        .then(console.log)
        .catch(console.log)
    }
}