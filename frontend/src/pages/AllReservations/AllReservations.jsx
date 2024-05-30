import "./AllReservations.css";
import { fetchAllReservationsContext } from "../../context/Context";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReservationCard from "../../components/ReservationCard/ReservationCard";
import AddReservation from "../../components/AddReservation/AddReservation";

import "./AllReservations.css";
import Searchbar from "../../components/Searchbar/Searchbar";

const AllReservations = () => {
  // global fetch all reservations
  const { allReservations, setAllReservations } = useContext(
    fetchAllReservationsContext
  );
  const [filteredReservations, setFilteredReservations] = useState([]);

  useEffect(() => {
    setFilteredReservations(allReservations);
  }, [allReservations]);
  return (
    <section className="all-reservations">
      <AddReservation />
      <Searchbar setFilteredReservations={setFilteredReservations} />
      <article>
        {filteredReservations.map((reservation) => (
          <ReservationCard key={reservation._id} reservation={reservation} />
        ))}
      </article>
    </section>
  );
};

export default AllReservations;
