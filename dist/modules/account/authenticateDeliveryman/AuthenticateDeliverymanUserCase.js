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
exports.AuthenticateDeliverymanUserCase = void 0;
const bcrypt_1 = require("bcrypt");
const prismaClient_1 = require("../../../database/prismaClient");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateDeliverymanUserCase {
    execute({ password, username }) {
        return __awaiter(this, void 0, void 0, function* () {
            // Receber username e senha
            //Verificar se o usuario está cadastrado para
            console.log(password, username);
            const deliveryman = yield prismaClient_1.prisma.deliveryman.findFirst({
                where: { username },
            });
            if (!deliveryman) {
                throw new Error(" Username ou password invalido");
            }
            // Verificar se a senha corresponde ao usernames
            const passwordMatch = yield (0, bcrypt_1.compare)(password, deliveryman.password);
            if (!passwordMatch) {
                throw new Error("sername ou password invalido");
            }
            // Gerar token
            const token = (0, jsonwebtoken_1.sign)({ username }, "chavesecreta", {
                subject: deliveryman.id,
                expiresIn: "1d",
            });
            return token;
        });
    }
}
exports.AuthenticateDeliverymanUserCase = AuthenticateDeliverymanUserCase;
//# sourceMappingURL=AuthenticateDeliverymanUserCase.js.map