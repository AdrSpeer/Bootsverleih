import "./Searchbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { fetchAllReservationsContext } from "../../context/Context";

const Searchbar = ({ setFilteredReservations }) => {
  const [searchInput, setSearchInput] = useState("");

  const { allReservations, setAllReservations } = useContext(
    fetchAllReservationsContext
  );
  useEffect(() => {
    if (!searchInput) {
      setFilteredReservations(allReservations);
      return;
    }

    const searchMatch = allReservations?.filter((res) => {
      return (
        res?.reservationName
          ?.toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        res?.reservationNumber
          ?.toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    });
    setFilteredReservations(searchMatch);
  }, [searchInput, allReservations, setFilteredReservations]);
  return (
    <div className="searchbar">
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        autoComplete="off"
        type="text"
        name="searchbar"
        placeholder="Suche nach Buchungsnummer oder Buchungsname"
      />
    </div>
  );
};

export default Searchbar;
