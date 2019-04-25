import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class fuck implements IBotCommand {

    private readonly _command = "fuck"

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
        let facts = [`https://cdn.discordapp.com/attachments/556941523271548948/570752213790490624/1437939772_ez.gif`,`https://cdn.discordapp.com/attachments/570423749720014848/570755494096928789/ffs.gif`,`https://cdn.discordapp.com/attachments/570423749720014848/570755492813471754/fffsss.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3b3c7a')
        .setDescription(`${memoriam} and ${user} are exchanging body fluids! Don't look!`)
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}