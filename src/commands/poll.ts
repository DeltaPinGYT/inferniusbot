import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class poll implements IBotCommand {

    private readonly _command = "poll"

    help(): string {
        return "creates a basic poll";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        msgObject.delete(0);

        if(args.length < 1) { return; }

        let pollEmbed = new Discord.RichEmbed()
            .setTitle("Poll")
            .setDescription(args.join(" "))

        let pollMessages = await msgObject.channel.send(pollEmbed);
        await (pollMessages as Discord.Message).react("✅");
        await (pollMessages as Discord.Message).react("❎");

        const filter = (reaction: Discord.MessageReaction) => reaction.emoji.name === "✅" || reaction.emoji.name === "❎";
        const results = await (pollMessages as Discord.Message).awaitReactions(filter, { time: 10000 })

        let resultsEmbed = new Discord.RichEmbed()
            .setTitle("Poll Results")
            .setDescription(`Results for the poll: ${args.join(" ")}`)
            .addField("✅:", `${results.get("✅").count-1}`)
            .addField("❎:", `${results.get("❎").count-1}`)

        msgObject.channel.send(resultsEmbed);
        (pollMessages as Discord.Message).delete(0);

    }

}