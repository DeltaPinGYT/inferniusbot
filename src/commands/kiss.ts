import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class kiss implements IBotCommand {

    private readonly _command = "kiss"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let id = args[0];
        let memoriam = msgObject.author.username || msgObject.member.nickname;
        let user = msgObject.mentions.users.first() || client.users.get(id);
        let facts = [`https://cdn.discordapp.com/attachments/570423749720014848/570758091008901120/giphy_3.gif`,`https://cdn.discordapp.com/attachments/570423749720014848/570758084885217300/giphy_1.gif`,`https://cdn.discordapp.com/attachments/570423749720014848/570758093235945473/giphy_2.gif`,`https://cdn.discordapp.com/attachments/570423749720014848/570758094682980354/giphy.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3c3b7a')
        .setDescription(`${memoriam} just kissed ${user}! How cute!`)
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}