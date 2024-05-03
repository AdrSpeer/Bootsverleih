import { ReservationService } from "../services/index.js";
import { validationResult } from "express-validator";

async function getAllReservationsCtrl(req, res) {
  try {
    const reservations = await ReservationService.readAllReservations();
    res.json(reservations);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not get all reservations" });
  }
}

async function postCreateReservationCtrl(req, res) {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(400).json({ message: "Data not valid", validationError });
  }

  try {
    const newReservation = {
      boatId: req.params.boatId,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    };
    const addedReservation = await ReservationService.createReservation(
      newReservation
    );
    res.json(addedReservation || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new reservation" });
  }
}

async function patchUpdateReservationCtrl(req, res) {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(400).json({ message: "Data not valid", validationError });
  }
  try {
    const reservationId = req.params.reservationId;
    const updateReservationInfo = {
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    };
    const updatedReservation = await ReservationService.updatedReservation(
      reservationId,
      updateReservationInfo
    );
    res.json(updatedReservation || {});
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: "Could not update this boat", reservationId });
  }
}

async function deleteReservationCtrl(req, res) {
  try {
    const reservationId = req.params.reservationId;
    const deletedReservation = await ReservationService.deleteReservation(
      reservationId
    );
    res.json(deletedReservation || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
      message: "Could not delete this reservation",
      reservationId,
    });
  }
}

export const ReservationsController = {
  getAllReservationsCtrl,
  postCreateReservationCtrl,
  patchUpdateReservationCtrl,
  deleteReservationCtrl,
};
