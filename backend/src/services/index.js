import { createBoat } from "./createBoat.js";
import { updateBoat } from "./updateBoat.js";
import { createReservation } from "./createReservation.js";
import { deleteBoat } from "./deleteBoat.js";
import { deleteReservation } from "./deleteReservation.js";
import { readAllBoats } from "./readAllBoats.js";
import { readAllReservations } from "./readAllReservations.js";
import { readBoatById } from "./readBoatById.js";
import { updatedReservation } from "./updateReservation.js";

export const BoatService = {
  readAllBoats,
  readBoatById,
  createBoat,
  updateBoat,
  deleteBoat,
};
export const ReservationService = {
  readAllReservations,
  createReservation,
  updatedReservation,
  deleteReservation,
};
