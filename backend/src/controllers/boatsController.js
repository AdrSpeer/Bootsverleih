import { BoatService } from "../services/index.js";
import { validationResult } from "express-validator";

async function getAllBoatsCtrl(req, res) {
  try {
    const boats = await BoatService.readAllBoats();
    res.json(boats);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not get all boats" });
  }
}

async function getOneBoatCtrl(req, res) {
  try {
    const boatId = req.params.boatId;
    const foundBoat = await BoatService.readBoatById(boatId);
    res.json(foundBoat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not find this boat", boatId });
  }
}

async function postCreateBoatCtrl(req, res) {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(400).json({ message: "Data not valid", validationError });
  }

  try {
    const newBoat = {
      boatName: req.body.boatName,
      constructionYear: req.body.constructionYear,
      serialNumber: req.body.serialNumber,
      material: req.body.material,
      boatType: req.body.boatType,
    };
    const addedBoat = await BoatService.createBoat(newBoat);
    res.json(addedBoat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new boat" });
  }
}

async function patchUpdateBoatCtrl(req, res) {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(400).json({ message: "Data not valid", validationError });
  }
  try {
    const boatId = req.params.boatId;
    const updateBoatInfo = {
      boatName: req.body.boatName,
      constructionYear: req.body.constructionYear,
      serialNumber: req.body.serialNumber,
      material: req.body.material,
      boatType: req.body.boatType,
    };
    const updatedBoat = await BoatService.updateBoat(boatId, updateBoatInfo);
    res.json(updatedBoat || {});
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: "Could not update this boat", boatId });
  }
}

async function deleteOneBoatCtrl(req, res) {
  try {
    const boatId = req.params.boatId;
    const deletedBoat = await BoatService.deleteBoat(boatId);
    res.json(deletedBoat || {});
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: "Could not delete this boat", boatId });
  }
}

export const BoatsController = {
  getAllBoatsCtrl,
  getOneBoatCtrl,
  postCreateBoatCtrl,
  patchUpdateBoatCtrl,
  deleteOneBoatCtrl,
};
