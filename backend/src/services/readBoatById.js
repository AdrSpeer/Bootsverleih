import { Boat } from "../models/Boats.js";

export function readBoatById(boatId) {
  return Boat.findById(boatId);
}
