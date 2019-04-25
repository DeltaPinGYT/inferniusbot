import * as Discord from "discord.js";
import * as db from "quick.db";
import * as ItemData from "../itemData";
import { IBotCommand } from "../api";
import { itemModel } from "../models/itemModel";

export default class buy implements IBotCommand {

    private readonly _command = "buy"

    help(): string {
        return "adds a specified item to the inventory of the mentioned user";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        msgObject.delete(0);

        if (args.length < 1) { return; }

        let newItemName = args.join(' ');
        newItemName = newItemName.toLowerCase();

        let item: itemModel = null;

        ItemData.itemData.items.forEach(element => {
            if (element.name.toLowerCase() == newItemName.toLowerCase()) {
                item = element;

            }
        });

        if (item === null) {
            msgObject.channel.send(`sorry ${msgObject.author.username}, ${newItemName} doesn't exist! `)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
                return;
        }
       
        let userMoney: number = db.get(`${msgObject.author.id}.money`)

        if(userMoney < item.price){
            msgObject.channel.send(`sorry ${msgObject.author.username}, ${item.name} costs ${item.price}$ but you only have ${userMoney} `)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
                return;
    }

    db.add(`${msgObject.author.id}.money`, -item.price);
    db.push(`${msgObject.author.id}.items`, item.name);

    msgObject.channel.send(`${msgObject.member.displayName},you successfully bought: ${item.name},it costed you ${item.price}!`)
    .then(msg => {
        (msg as Discord.Message).delete(5000)
            .catch(console.error);
    });
}}