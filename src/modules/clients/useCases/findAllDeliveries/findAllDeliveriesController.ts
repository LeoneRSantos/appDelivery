import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./findAllDeliveriesUseCase";

export class FindaAllDeliveriesController {
  async handle(req: Request, res: Response) {
    const { id_deliveryman } = req;
    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();
    const result = await findAllDeliveriesUseCase.execute(id_deliveryman);
    return res.json(result);
  }
}
