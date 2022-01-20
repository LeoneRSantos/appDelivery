import { Request, Response } from "express";
import { UpdateDeliveryUseCase } from "./updateDeliveryUseCase";

export class UpdateDeliveryController {
  async handle(req: Request, res: Response) {
    console.log(req.id_deliveryman);
    const { id } = req.params;
    const { id_deliveryman } = req;
    const updadeDelivery = new UpdateDeliveryUseCase();
    const delivery = await updadeDelivery.execute({ id, id_deliveryman });
    return res.json(delivery);
  }
}
