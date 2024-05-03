import express from "express";
import { ReservationsController } from "../controllers/reservationsController.js";
import { body, param, validationResult } from "express-validator";

export const reservationRouter = express
  .Router()
  .get("/", ReservationsController.getAllReservationsCtrl)
  .post(
    "/:boatId",
    body("startDate").isString(),
    body("endDate").isString(),
    ReservationsController.postCreateReservationCtrl
  )
  .patch("/:reservationId", ReservationsController.patchUpdateReservationCtrl)
  .delete("/:reservationId", ReservationsController.deleteReservationCtrl);
