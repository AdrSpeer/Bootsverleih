import express from "express";
import { BoatsController } from "../controllers/boatsController.js";
import { body } from "express-validator";

export const boatRouter = express
  .Router()
  .get("/", BoatsController.getAllBoatsCtrl)
  .get("/:boatId", BoatsController.getOneBoatCtrl)
  .post(
    "/",
    body("boatName").isString().notEmpty(),
    body("constructionYear").isInt(),
    body("serialNumber").isInt(),
    BoatsController.postCreateBoatCtrl
  )
  .patch(
    "/:boatId",
    body("boatName").isString().notEmpty(),
    body("constructionYear").isInt(),
    body("serialNumber").isInt(),
    body("material").isString().notEmpty(),
    body("boatType").isString().notEmpty(),
    BoatsController.patchUpdateBoatCtrl
  )
  .delete("/:boatId", BoatsController.deleteOneBoatCtrl);
