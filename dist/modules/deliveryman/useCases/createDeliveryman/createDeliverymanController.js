"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeliverymanController = void 0;
const CreateDeliverymanUseCase_1 = require("./CreateDeliverymanUseCase");
class CreateDeliverymanController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            const createDeliverymanUseCase = new CreateDeliverymanUseCase_1.CreateDeliverymanUseCase();
            const result = yield createDeliverymanUseCase.execute({
                username,
                password,
            });
            return res.json(result);
        });
    }
}
exports.CreateDeliverymanController = CreateDeliverymanController;
//# sourceMappingURL=createDeliverymanController.js.map