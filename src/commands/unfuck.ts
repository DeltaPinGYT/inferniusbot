import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class unfuck implements IBotCommand {

    private readonly _command = "unfuck"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let memoriam = msgObject.member.nickname || msgObject.author.username
        let id = args[0];
        let user = msgObject.mentions.users.first() || client.users.get(id)
        let facts = [`https://cdn.discordapp.com/attachments/569338221067239425/570814288349102101/tenor_3.gif`,`https://cdn.discordapp.com/attachments/569338221067239425/570814289439621120/tenor_1.gif`,`https://cdn.discordapp.com/attachments/569338221067239425/570814294179184650/tenor.gif`,`https://cdn.discordapp.com/attachments/569338221067239425/570814293990440981/tenor_2.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3b3c7a')
        .setDescription(`${memoriam}, YOU SHOULD TELL YOUR PARENTS TO UNFUCK BECAUSE THEY DONE FUCKED UP HAVING YOU AS A KID`)
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}