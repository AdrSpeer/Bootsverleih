import { Boat } from "../models/Boats.js";

export async function deleteBoat(boatId) {
  const removedBoat = await Boat.findByIdAndDelete(boatId);
  if (!removedBoat) throw new Error("Boat with this id doesn't exists");
  else return removedBoat;
}
