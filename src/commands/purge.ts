import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class purge implements IBotCommand {

    private readonly _command = "purge"

    help(): string {
        return "(admin only) Deletes the desired number of messages in the channel.";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        //Clean up our messages
        msgObject.delete()
            .catch(console.error);

        //Check if the member is an admin!
        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`sorry ${msgObject.author.username} you cannot use this command!`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }



        //Make sure that they have said how many messages they want to delete.
        if (!args[0]) {
            msgObject.channel.send(`sorry ${msgObject.author.username} but you must supply enough number of messages to be deleted!`)
                .then(msg => {
                if (!msgObject.pinned) {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                }
                });
            return;
        }

        //Convert arg[0] into a number.
        let numberOfMessagesToDelete = Number(args[0]);

        //Make sure the args[0] is actually a number
        if (isNaN(numberOfMessagesToDelete)) {
            msgObject.channel.send(`sorry ${msgObject.author.username} but that isn't a valid number.`)
                .then(msg => {
                if (!msgObject.pinned) {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                }
                })
            return;
        }

        //Make sure the number is an integer
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete + 1);

        //Delete the desired number of messages
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);

    }
}