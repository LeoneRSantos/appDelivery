import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUserCase {
  async execute({ password, username }: IAuthenticateDeliveryman) {
    // Receber username e senha
    //Verificar se o usuario está cadastrado para
    console.log(password, username);
    const deliveryman = await prisma.deliveryman.findFirst({
      where: { username },
    });

    if (!deliveryman) {
      throw new Error(" Username ou password invalido");
    }

    // Verificar se a senha corresponde ao usernames
    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("sername ou password invalido");
    }
    // Gerar token
    const token = sign({ username }, "chavesecreta", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });
    return token;
  }
}
