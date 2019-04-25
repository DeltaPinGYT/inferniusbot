import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class info implements IBotCommand {

    private readonly _command = "info"
    
    

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        

        let embed = new Discord.RichEmbed()
            .setColor([0, 200, 0])
            .setTitle("Server Information")
            .setImage(msgObject.guild.iconURL)
            .setDescription(`Welcome to ${msgObject.guild.name}`)
            .addField("Server Count:", `The server currently has ${msgObject.guild.memberCount}`)

            console.log(msgObject)
 

        msgObject.channel.send(embed)
            .catch(console.error)
    }
}