import { Boat } from "../models/Boats.js";

export function readAllBoats() {
  return Boat.find({});
}
