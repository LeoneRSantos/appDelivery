import { prisma } from "../../../../database/prismaClient";

interface IUpdateDelivery {
  id: string;
  id_deliveryman: string;
}

export class UpdateDeliveryUseCase {
  async execute({ id, id_deliveryman }: IUpdateDelivery) {
    console.log(id_deliveryman);
    const result = await prisma.deliveries.update({
      where: { id },
      data: { id_deliveryman },
    });

    return result;
  }
}
