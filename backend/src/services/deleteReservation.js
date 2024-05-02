import { Reservation } from "../models/Reservations.js";

export function deleteReservation(reservationId) {
  return Reservation.findByIdAndDelete(reservationId).then(
    (removedReservation) => {
      if (!removedReservation)
        throw new Error("Reservation with this ID doesn't exists");
      else return removedReservation;
    }
  );
}
