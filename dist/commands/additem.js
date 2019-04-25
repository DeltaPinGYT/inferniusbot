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
class additem {
    constructor() {
        this._command = "additem";
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
            let item = null;
            ItemData.itemData.items.forEach(element => {
                if (element.name == newItemName) {
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
            msgObject.channel.send(`${msgObject.member.displayName},you successfully bought: ${item.name},it costed you ${item.price}!`)
                .then(msg => {
                msg.delete(5000)
                    .catch(console.error);
            });
        });
    }
}
exports.default = additem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9hZGRpdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSwrQkFBK0I7QUFDL0Isd0NBQXdDO0FBSXhDLE1BQXFCLE9BQU87SUFBNUI7UUFFcUIsYUFBUSxHQUFHLFNBQVMsQ0FBQTtJQXNEeEMsQ0FBQztJQXBERSxJQUFJO1FBQ0EsT0FBTyw4REFBOEQsQ0FBQztJQUMxRSxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXBCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBRWhDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakMsSUFBSSxJQUFJLEdBQWMsSUFBSSxDQUFDO1lBRTNCLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLFdBQVcsRUFBRTtvQkFDN0IsSUFBSSxHQUFHLE9BQU8sQ0FBQztpQkFFbEI7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDZixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFdBQVcsa0JBQWtCLENBQUM7cUJBQ3ZGLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDZDtZQUVELElBQUksU0FBUyxHQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFFOUQsSUFBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBQztnQkFDdEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxVQUFVLElBQUksQ0FBQyxLQUFLLHVCQUF1QixTQUFTLEdBQUcsQ0FBQztxQkFDMUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNsQjtZQUVELEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXBELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLDZCQUE2QixJQUFJLENBQUMsSUFBSSxrQkFBa0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO2lCQUMzSCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0NBQUM7QUF4REYsMEJBd0RFIn0=