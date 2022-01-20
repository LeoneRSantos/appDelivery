import { Request, Response } from "express";
import { UpdateEndCaseUseCase } from "./updateEndDateUseCase";

export class UpdateEndDateController {
  async handle(req: Request, res: Response) {
    console.log(req.id_deliveryman);
    const { id } = req.params;
    const { id_deliveryman } = req;
    const updateEndCaseUseCase = new UpdateEndCaseUseCase();
    const delivery = await updateEndCaseUseCase.execute({ id, id_deliveryman });
    return res.json(delivery);
  }
}
