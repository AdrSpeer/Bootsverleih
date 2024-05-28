import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDatabase } from "./models/connectDb.js";
import { boatRouter } from "./routes/boatRouter.js";
import { reservationRouter } from "./routes/reservationRouter.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//* Endpoints Boats
app.use("/api/v1/boats", boatRouter);
//* Endpoints Reservations
app.use("/api/v1/reservations", reservationRouter);

// connection to database via connectDb.js
try {
  await connectToDatabase();
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log("Server listening at PORT", PORT));
} catch (err) {
  console.log(err);
  process.exit();
}
