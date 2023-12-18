import express from "express";
import ApartmentController from "../controllers/apartmentController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();
// add documentation

router.post('/add_apartment',verifyToken, ApartmentController.insertApartment);
router.get("/",verifyToken, ApartmentController.getAllApartments);
router.get("/:id",verifyToken, ApartmentController.getApartment);
router.put("/:id",verifyToken, ApartmentController.updateApartment)
router.delete("/:id",verifyToken, ApartmentController.deleteApartment)

export default router;