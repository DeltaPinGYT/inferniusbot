import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class gamble implements IBotCommand {

    private readonly _command = "gamble"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        {
            function makeid(length: number) {
                let result           = '';
                let characters       = '0123456789';
                let charactersLength = characters.length;
                for ( let i = 0; i < length; i++ ) {
                   result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                msgObject.channel.send(result);
             }
             
             console.log(makeid(2));
        }

    }

}