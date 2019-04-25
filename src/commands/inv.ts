import * as Discord from "discord.js";
import * as db from "quick.db";
import { IBotCommand } from "../api";

export default class inv implements IBotCommand {

    private readonly _command = "inv"

    help(): string {
        return "This command shows the user's inventory";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let userId = "";

        if (args.length > 0) {
            if (msgObject.mentions.users.size > 0) {
                userId = msgObject.mentions.users.first().id;
            }
            else { return; }
        }
        else {
            userId = msgObject.member.id;
        }
        let userMoney: number = db.get(`${msgObject.author.id}.money`)
        let userItems = db.get(`${msgObject.author.id}.items`)

        let inventoryEmbed = new Discord.RichEmbed()
        .setTitle(`${msgObject.member.displayName}'s inventory`)
        .setColor('#3b3c7a')
        .addField("money:", `${userMoney}$`)
        .addField("items:", `${userItems}`)

        msgObject.channel.send(inventoryEmbed)
        msgObject.delete(0)
        .then(msg => {
            (msg as Discord.Message).delete(10000)
            .catch(console.error);
        });
    }
}