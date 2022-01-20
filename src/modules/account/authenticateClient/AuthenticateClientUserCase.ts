import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUserCase {
  async execute({ password, username }: IAuthenticateClient) {
    // Receber username e senha
    //Verificar se o usuario está cadastrado para
    console.log(password, username);
    const client = await prisma.clients.findFirst({
      where: { username },
    });

    if (!client) {
      throw new Error(" Username ou password invalido");
    }

    // Verificar se a senha corresponde ao usernames
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("sername ou password invalido");
    }
    // Gerar token
    const token = sign({ username }, "chavesecreta", {
      subject: client.id,
      expiresIn: "1d",
    });
    return token;
  }
}
