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
exports.CreateDeliveryController = void 0;
const createDeliveryUseCase_1 = require("./createDeliveryUseCase");
class CreateDeliveryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { item_name } = req.body;
            const createDeliveryUseCase = new createDeliveryUseCase_1.CreateDeliveryUseCase();
            const result = yield createDeliveryUseCase.execute({
                item_name,
                id_client: req.id_client,
            });
            return res.json(result);
        });
    }
}
exports.CreateDeliveryController = CreateDeliveryController;
//# sourceMappingURL=createDeliveryController.js.map