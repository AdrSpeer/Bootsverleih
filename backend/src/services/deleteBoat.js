import { Boat } from "../models/Boats.js";

export function deleteBoat(boatId) {
  return Boat.findByIdAndDelete(boatId).then((removedBoat) => {
    if (!removedBoat) throw new Error("Boat with this id doesn't exists");
    else return removedBoat;
  });
}
