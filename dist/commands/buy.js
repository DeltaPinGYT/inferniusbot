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
const db = require("quick.db");
const ItemData = require("../itemData");
class buy {
    constructor() {
        this._command = "buy";
    }
    help() {
        return "adds a specified item to the inventory of the mentioned user";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(0);
            if (args.length < 1) {
                return;
            }
            let newItemName = args.join(' ');
            newItemName = newItemName.toLowerCase();
            let item = null;
            ItemData.itemData.items.forEach(element => {
                if (element.name.toLowerCase() == newItemName.toLowerCase()) {
                    item = element;
                }
            });
            if (item === null) {
                msgObject.channel.send(`sorry ${msgObject.author.username}, ${newItemName} doesn't exist! `)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            let userMoney = db.get(`${msgObject.author.id}.money`);
            if (userMoney < item.price) {
                msgObject.channel.send(`sorry ${msgObject.author.username}, ${item.name} costs ${item.price}$ but you only have ${userMoney} `)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            db.add(`${msgObject.author.id}.money`, -item.price);
            db.push(`${msgObject.author.id}.items`, item.name);
            msgObject.channel.send(`${msgObject.member.displayName},you successfully bought: ${item.name},it costed you ${item.price}!`)
                .then(msg => {
                msg.delete(5000)
                    .catch(console.error);
            });
        });
    }
}
exports.default = buy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2J1eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsK0JBQStCO0FBQy9CLHdDQUF3QztBQUl4QyxNQUFxQixHQUFHO0lBQXhCO1FBRXFCLGFBQVEsR0FBRyxLQUFLLENBQUE7SUF3RHBDLENBQUM7SUF0REUsSUFBSTtRQUNBLE9BQU8sOERBQThELENBQUM7SUFDMUUsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVwQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUFFLE9BQU87YUFBRTtZQUVoQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFeEMsSUFBSSxJQUFJLEdBQWMsSUFBSSxDQUFDO1lBRTNCLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDekQsSUFBSSxHQUFHLE9BQU8sQ0FBQztpQkFFbEI7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDZixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFdBQVcsa0JBQWtCLENBQUM7cUJBQ3ZGLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDZDtZQUVELElBQUksU0FBUyxHQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFFOUQsSUFBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBQztnQkFDdEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxVQUFVLElBQUksQ0FBQyxLQUFLLHVCQUF1QixTQUFTLEdBQUcsQ0FBQztxQkFDMUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNsQjtZQUVELEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVuRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyw2QkFBNkIsSUFBSSxDQUFDLElBQUksa0JBQWtCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztpQkFDM0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztxQkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUFDO0FBMURGLHNCQTBERSJ9