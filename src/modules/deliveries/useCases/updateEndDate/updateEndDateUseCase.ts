import { prisma } from "../../../../database/prismaClient";

interface IUpdateDelivery {
  id: string;
  id_deliveryman: string;
}

export class UpdateEndCaseUseCase {
  async execute({ id, id_deliveryman }: IUpdateDelivery) {
    console.log(id_deliveryman);
    console.log(id);
    const result = await prisma.deliveries.updateMany({
      where: { id, id_deliveryman },
      data: { end_at: new Date() },
    });

    return result;
  }
}
