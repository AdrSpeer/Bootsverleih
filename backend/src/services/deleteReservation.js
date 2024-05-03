import { Reservation } from "../models/Reservations.js";

export async function deleteReservation(reservationId) {
  const removedReservation = await Reservation.findByIdAndDelete(reservationId);
  if (!removedReservation)
    throw new Error("Reservation with this ID doesn't exists");
  else return removedReservation;
}
