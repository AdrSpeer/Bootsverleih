import { useContext, useState } from "react";
import { backendURL } from "../../api/api";
import {
  fetchAllBoatsContext,
  fetchAllReservationsContext,
} from "../../context/Context";
import "./EditReservation.css";

const EditReservation = ({ reservation }) => {
  // state to toggle edit form
  const [showEdit, setShowEdit] = useState(false);

  // states for input fields
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // state for error message
  const [error, setError] = useState("");

  // global fetch for all boats
  const { allBoats, setAllBoats } = useContext(fetchAllBoatsContext);

  // global fetch for all reservations
  const { allReservations, setAllReservations } = useContext(
    fetchAllReservationsContext
  );

  // function to add a boat
  const editReservation = (e) => {
    e.preventDefault();

    if (new Date() > startDate || startDate > endDate) {
      return setError("Kein valides Datum");
    }

    const updatedReservation = {
      startDate,
      endDate,
    };

    fetch(`${backendURL}/api/v1/reservations/${reservation._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReservation),
    })
      .then((res) => res.json())
      .then((data) => {
        const filter = allReservations.filter(
          (reservation) => reservation._id !== data._id
        );
        setAllReservations([data, ...filter]);
      })
      .catch((err) => console.log(err));

    setError("");
    setShowEdit(false);
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={20}
        onClick={() => setShowEdit(!showEdit)}
      >
        <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
      </svg>

      <form className={showEdit ? "boat-form show" : "boat-form hide"}>
        <h2>Edit a reservation</h2>

        <input
          required
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          required
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        {error.length > 0 ? <p>{error}</p> : ""}

        <button onClick={editReservation}>Reservierung anpassen</button>
      </form>
    </div>
  );
};

export default EditReservation;
