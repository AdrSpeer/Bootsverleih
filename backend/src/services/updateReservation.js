import { Reservation } from "../models/Reservations.js";

export function updatedReservation(reservationId, updateReservationInfo) {
  return Reservation.findByIdAndUpdate(
    reservationId,
    { $set: updateReservationInfo },
    { new: true }
  );
}
