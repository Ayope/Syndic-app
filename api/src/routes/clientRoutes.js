import express from "express";
import ClientController from "../controllers/clientController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();
router.get('/',verifyToken, ClientController.getClients);
router.delete('/:id',verifyToken, ClientController.deleteClient);
router.put("/",verifyToken, ClientController.updateClient);

export default router;