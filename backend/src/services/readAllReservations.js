import { Reservation } from "../models/Reservations.js";

export async function readAllReservations() {
  const allReservations = await Reservation.find({});
  return allReservations;
}
