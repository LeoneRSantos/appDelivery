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
exports.CreateDeliverymanUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const prismaClient_1 = require("../../../../database/prismaClient");
class CreateDeliverymanUseCase {
    execute({ password, username }) {
        return __awaiter(this, void 0, void 0, function* () {
            // validar o usuario existnte
            const deliverymanExists = yield prismaClient_1.prisma.deliveryman.findFirst({
                where: {
                    username: {
                        equals: username,
                        mode: "insensitive",
                    },
                },
            });
            if (deliverymanExists) {
                throw new Error("Cliente já existe");
            }
            // criptografar a senha
            const hashPassword = yield (0, bcrypt_1.hash)(password, 10);
            // salvar o deliveryman
            const deliveryman = yield prismaClient_1.prisma.deliveryman.create({
                data: {
                    username,
                    password: hashPassword,
                },
            });
            return deliveryman;
        });
    }
}
exports.CreateDeliverymanUseCase = CreateDeliverymanUseCase;
//# sourceMappingURL=CreateDeliverymanUseCase.js.map