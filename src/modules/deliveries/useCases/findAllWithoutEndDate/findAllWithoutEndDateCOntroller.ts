import { Request, Response } from "express";
import { FindAllWithoutEndDateUseCase } from "./findAllWithoutEndDateUseCase";

export class FindAllWithoutEndDataController {
  async handle(req: Request, res: Response) {
    const findAllWithoutEndDate = new FindAllWithoutEndDateUseCase();

    const result = await findAllWithoutEndDate.execute();

    return res.json(result);
  }
}
