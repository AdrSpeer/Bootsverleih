import { Boat } from "../models/Boats.js";

export async function updateBoat(boatId, updateBoatInfo) {
  const updatedBoat = await Boat.findByIdAndUpdate(
    boatId,
    { $set: updateBoatInfo },
    { new: true }
  );
  return updatedBoat;
}
