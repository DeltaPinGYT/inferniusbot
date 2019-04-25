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
class kiss {
    constructor() {
        this._command = "kiss";
    }
    help() {
        return "This command does nothing";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = args[0];
            let memoriam = msgObject.author.username || msgObject.member.nickname;
            let user = msgObject.mentions.users.first() || client.users.get(id);
            let facts = [`https://cdn.discordapp.com/attachments/570423749720014848/570758091008901120/giphy_3.gif`, `https://cdn.discordapp.com/attachments/570423749720014848/570758084885217300/giphy_1.gif`, `https://cdn.discordapp.com/attachments/570423749720014848/570758093235945473/giphy_2.gif`, `https://cdn.discordapp.com/attachments/570423749720014848/570758094682980354/giphy.gif`];
            let fact = Math.floor(Math.random() * facts.length);
            let embed = new Discord.RichEmbed()
                .setColor('#3c3b7a')
                .setDescription(`${memoriam} just kissed ${user}! How cute!`)
                .setImage(facts[fact]);
            msgObject.channel.send(embed);
            msgObject.delete(0);
        });
    }
}
exports.default = kiss;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2lzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9raXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBMEJ0QyxDQUFDO0lBeEJHLElBQUk7UUFDQSxPQUFPLDJCQUEyQixDQUFDO0lBQ3ZDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUN0RSxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwRSxJQUFJLEtBQUssR0FBRyxDQUFDLDBGQUEwRixFQUFDLDBGQUEwRixFQUFDLDBGQUEwRixFQUFDLHdGQUF3RixDQUFDLENBQUM7WUFDeFgsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbEMsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsY0FBYyxDQUFDLEdBQUcsUUFBUSxnQkFBZ0IsSUFBSSxhQUFhLENBQUM7aUJBQzVELFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtZQUN0QixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhCLENBQUM7S0FBQTtDQUVKO0FBNUJELHVCQTRCQyJ9