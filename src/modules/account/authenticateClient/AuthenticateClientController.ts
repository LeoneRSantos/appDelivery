import { Request, Response } from "express";
import { AuthenticateClientUserCase } from "./AuthenticateClientUserCase";

export class AuthenticateClientController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;
    const authenticateClientUserCase = new AuthenticateClientUserCase();
    const result = await authenticateClientUserCase.execute({
      username,
      password,
    });
    return res.json(result);
  }
}
