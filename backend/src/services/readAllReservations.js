import { Reservation } from "../models/Reservations.js";

export function readAllReservations() {
  return Reservation.find({});
}
