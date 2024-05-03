import { Boat } from "../models/Boats.js";

export async function readBoatById(boatId) {
  const boatById = await Boat.findById(boatId);
  return boatById;
}
