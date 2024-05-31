import "./AddReservation.css";
import { useContext, useState } from "react";
import { backendURL } from "../../api/api";
import {
  fetchAllBoatsContext,
  fetchAllReservationsContext,
} from "../../context/Context";

const AddReservation = () => {
  // global fetch for all boats
  const { allBoats, setAllBoats } = useContext(fetchAllBoatsContext);

  // global fetch for all reservations
  const { allReservations, setAllReservations } = useContext(
    fetchAllReservationsContext
  );

  // states for input fields
  const [startDate, setStartDate] = useState("");
  const [reservationName, setReservationName] = useState("");
  const [reservationNumber, setReservationNumber] = useState("");
  const [endDate, setEndDate] = useState("");
  const [boatId, setBoatId] = useState("");
  const [showForm, setShowForm] = useState(false);

  // state for error message
  const [error, setError] = useState("");

  // function to add a reservation
  const addReservation = (e) => {
    e.preventDefault();

    if (new Date() > startDate || startDate > endDate) {
      return setError("Kein valides Datum");
    }

    const newReservation = {
      startDate,
      endDate,
      boatId,
      reservationName,
      reservationNumber,
    };

    fetch(`${backendURL}/api/v1/reservations/${boatId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReservation),
    })
      .then((res) => res.json())
      .then((data) => setAllReservations([data, ...allReservations]))
      .catch((err) => console.log(err));
  };

  return (
    <section className="add-res-wrapper">
      <h2 onClick={() => setShowForm(!showForm)}>Reservierung hinzufügen</h2>
      <form className={showForm ? "res-form" : "hide-res-form"}>
        <input
          type="date"
          required
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
        />

        <input
          type="date"
          required
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
        />
        <input
          type="text"
          required
          onChange={(e) => setReservationName(e.target.value)}
          value={reservationName}
          placeholder="Kundenname"
        />
        <input
          type="text"
          required
          onChange={(e) => setReservationNumber(e.target.value)}
          value={reservationNumber}
          placeholder="Reservierungsnummer"
        />

        <select
          name="boat"
          id="boat"
          required
          onChange={(e) => setBoatId(e.target.value)}
          value={boatId}
        >
          <option required value="">
            Welches Boot?
          </option>
          {allBoats.map((boat) => (
            <option key={boat._id} value={boat._id}>
              {boat.boatName}
            </option>
          ))}
        </select>

        {error.length > 0 ? <p>{error}</p> : ""}

        <button onClick={addReservation}>Reservierung hinzufügen</button>
      </form>
    </section>
  );
};

export default AddReservation;
