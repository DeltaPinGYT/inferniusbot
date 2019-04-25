import * as Discord from "discord.js";
import * as db from "quick.db";
import { IBotCommand } from "../api";

export default class money implements IBotCommand {

    private readonly _command = "money"

    help(): string {
        return "Displays the user's bank account";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        msgObject.delete(0);

        let moneyAmount = db.get(`${msgObject.author.id}.money`)

        let moneyEmbed = new Discord.RichEmbed()
            .setTitle(`${msgObject.author.username}'s money`)
            .setColor('#efff00')
            .setDescription(`${moneyAmount} $`)

        msgObject.channel.send(moneyEmbed);
            (msg: Discord.Message) => {
            (msg as Discord.Message).delete(3000)
            .catch(console.error);
        }
    }
}