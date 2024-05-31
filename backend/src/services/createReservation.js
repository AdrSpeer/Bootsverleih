import { Reservation } from "../models/Reservations.js";

export async function createReservation(newReservation) {
  const createdReservation = await Reservation.create(newReservation);
  return createdReservation;
}
