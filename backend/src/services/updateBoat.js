import { Boat } from "../models/Boats.js";

export function updateBoat(boatId, updateBoatInfo) {
  return Boat.findByIdAndUpdate(
    boatId,
    { $set: updateBoatInfo },
    { new: true }
  );
}
