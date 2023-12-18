import express from "express";
import paymentController from "../controllers/paymentController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post('/',verifyToken, paymentController.insertPayment);
router.get('/',verifyToken, paymentController.getPayments);
router.delete('/:id',verifyToken, paymentController.deletePayment);
router.put('/',verifyToken, paymentController.updatePayment)
router.get("/:id",verifyToken, paymentController.getPayment)
router.get('/apartment/:id',verifyToken, paymentController.getApartmentPayments);


export default router;