import { Reservation } from "../models/Reservations.js";

export async function updatedReservation(reservationId, updateReservationInfo) {
  const updatedReservation = await Reservation.findByIdAndUpdate(
    reservationId,
    { $set: updateReservationInfo },
    { new: true }
  );

  return updatedReservation;
}
