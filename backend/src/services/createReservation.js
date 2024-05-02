import { Reservation } from "../models/Reservations.js";

export function createReservation(newReservation) {
  return Reservation.create(newReservation);
}
