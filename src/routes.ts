import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/createDeliveryController";
import { ensureAuthenticateClient } from "./middleware/ensureAuthenticateClient";
import { FindAllWithoutEndDataController } from "./modules/deliveries/useCases/findAllWithoutEndDate/findAllWithoutEndDateCOntroller";
import { ensureAuthenticateDeliveryman } from "./middleware/ensureAuthenticateDeliveryman";
import { UpdateDeliveryController } from "./modules/deliveries/useCases/updateDelivery/updateDeliveryController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/updateEndDateController";
import { FindaAllDeliveriesController } from "./modules/clients/useCases/findAllDeliveries/findAllDeliveriesController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/findAllDeliveriesDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const createClientDeliveryman = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const createDeliveryController = new CreateDeliveryController();
const findAllWithoutEndDataController = new FindAllWithoutEndDataController();
const updateDeliveryController = new UpdateDeliveryController();
const updateEndDateController = new UpdateEndDateController();
const findaAllDeliveriesController = new FindaAllDeliveriesController();

const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();

routes.get("/", (req, res) => {
  res.json({ message: "olá mundo" });
});
routes.post("/client", createClientController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);
routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);
routes.post("/deliveryman", createClientDeliveryman.handle);
routes.post(
  "/delivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);

routes.get(
  "/delivery/available",
  ensureAuthenticateDeliveryman,
  findAllWithoutEndDataController.handle
);

routes.put(
  "/delivery/updateDelivery/:id",
  ensureAuthenticateDeliveryman,
  updateDeliveryController.handle
);

routes.get(
  "/clients/deliveries",
  ensureAuthenticateClient,
  findaAllDeliveriesController.handle
);

routes.get(
  "/deliveryman/deliveries",
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);

routes.put(
  "/deliveries/updateEndAt/:id",
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle
);

export { routes };
