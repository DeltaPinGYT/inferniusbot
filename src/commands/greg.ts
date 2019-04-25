import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class greg implements IBotCommand {

    private readonly _command = "greg"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let embed = new Discord.RichEmbed()
        .setColor('#3b3c7a')
        .setTitle('Greg 1994#1330')
        .setImage(`https://cdn.discordapp.com/avatars/561468109966278667/81a02a1c2134396a96fc80d2cd2f1be7.png?size=2048`)
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}