import { Boat } from "../models/Boats.js";

export function createBoat(newBoat) {
  return Boat.findOne({ boatName: newBoat.boatName }).then((foundBoat) => {
    if (foundBoat) {
      throw new Error("Boat with this name already exists");
    } else {
      return Boat.create(newBoat);
    }
  });
}
