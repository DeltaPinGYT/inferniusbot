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
class purge {
    constructor() {
        this._command = "purge";
    }
    help() {
        return "(admin only) Deletes the desired number of messages in the channel.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete()
                .catch(console.error);
            if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                msgObject.channel.send(`sorry ${msgObject.author.username} you cannot use this command!`)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            if (!args[0]) {
                msgObject.channel.send(`sorry ${msgObject.author.username} but you must supply enough number of messages to be deleted!`)
                    .then(msg => {
                    if (!msgObject.pinned) {
                        msg.delete(5000)
                            .catch(console.error);
                    }
                });
                return;
            }
            let numberOfMessagesToDelete = Number(args[0]);
            if (isNaN(numberOfMessagesToDelete)) {
                msgObject.channel.send(`sorry ${msgObject.author.username} but that isn't a valid number.`)
                    .then(msg => {
                    if (!msgObject.pinned) {
                        msg.delete(5000)
                            .catch(console.error);
                    }
                });
                return;
            }
            numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete + 1);
            msgObject.channel.bulkDelete(numberOfMessagesToDelete)
                .catch(console.error);
        });
    }
}
exports.default = purge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcHVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQXFCLEtBQUs7SUFBMUI7UUFFcUIsYUFBUSxHQUFHLE9BQU8sQ0FBQTtJQStEdkMsQ0FBQztJQTdERyxJQUFJO1FBQ0EsT0FBTyxxRUFBcUUsQ0FBQztJQUNqRixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUcvRSxTQUFTLENBQUMsTUFBTSxFQUFFO2lCQUNiLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFHMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUNsRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSwrQkFBK0IsQ0FBQztxQkFDcEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsT0FBTzthQUNWO1lBS0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDVixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSwrREFBK0QsQ0FBQztxQkFDcEgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO3dCQUNsQixHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NkJBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzdCO2dCQUNELENBQUMsQ0FBQyxDQUFDO2dCQUNQLE9BQU87YUFDVjtZQUdELElBQUksd0JBQXdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRy9DLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7Z0JBQ2pDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLGlDQUFpQyxDQUFDO3FCQUN0RixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7d0JBQ2xCLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs2QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDN0I7Z0JBQ0QsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sT0FBTzthQUNWO1lBR0Qsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUdwRSxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDakQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QixDQUFDO0tBQUE7Q0FDSjtBQWpFRCx3QkFpRUMifQ==