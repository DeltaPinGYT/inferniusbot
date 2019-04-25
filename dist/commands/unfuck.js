"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class unfuck {
    constructor() {
        this._command = "unfuck";
    }
    help() {
        return "This command does nothing";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let memoriam = msgObject.member.nickname || msgObject.author.username;
            let id = args[0];
            let user = msgObject.mentions.users.first() || client.users.get(id);
            let facts = [`https://cdn.discordapp.com/attachments/569338221067239425/570814288349102101/tenor_3.gif`, `https://cdn.discordapp.com/attachments/569338221067239425/570814289439621120/tenor_1.gif`, `https://cdn.discordapp.com/attachments/569338221067239425/570814294179184650/tenor.gif`, `https://cdn.discordapp.com/attachments/569338221067239425/570814293990440981/tenor_2.gif`];
            let fact = Math.floor(Math.random() * facts.length);
            let embed = new Discord.RichEmbed()
                .setColor('#3b3c7a')
                .setDescription(`${memoriam}, YOU SHOULD TELL YOUR PARENTS TO UNFUCK BECAUSE THEY DONE FUCKED UP HAVING YOU AS A KID`)
                .setImage(facts[fact]);
            msgObject.channel.send(embed);
            msgObject.delete(0);
        });
    }
}
exports.default = unfuck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5mdWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3VuZnVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLE1BQU07SUFBM0I7UUFFcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQTBCeEMsQ0FBQztJQXhCRyxJQUFJO1FBQ0EsT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtZQUNyRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDbkUsSUFBSSxLQUFLLEdBQUcsQ0FBQywwRkFBMEYsRUFBQywwRkFBMEYsRUFBQyx3RkFBd0YsRUFBQywwRkFBMEYsQ0FBQyxDQUFDO1lBQ3hYLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2xDLFFBQVEsQ0FBQyxTQUFTLENBQUM7aUJBQ25CLGNBQWMsQ0FBQyxHQUFHLFFBQVEsMEZBQTBGLENBQUM7aUJBQ3JILFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtZQUN0QixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhCLENBQUM7S0FBQTtDQUVKO0FBNUJELHlCQTRCQyJ9