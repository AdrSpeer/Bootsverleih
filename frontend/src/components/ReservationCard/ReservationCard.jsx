import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { backendURL } from "../../api/api";
import "./ReservationCard.css";
import EditReservation from "../EditReservation/EditReservation";
import DeleteReservation from "../DeleteReservation/DeleteReservation";

const ReservationCard = ({ reservation }) => {
  // state for boat details
  const [boatDetails, setBoatDetails] = useState([]);

  // fetch boat details (to get boatName and boatImg)
  useEffect(() => {
    fetch(`${backendURL}/api/v1/boats/${reservation?.boatId}`)
      .then((res) => res.json())
      .then((data) => setBoatDetails(data))
      .catch((err) => console.log("Failed to fetch Boat Details", err));
  }, [reservation?.boatId]);

  return (
    <div className="reservation-card">
      <p>
        <span>Startdatum: </span>
        {new Date(reservation?.startDate).toLocaleDateString()}
      </p>
      <p>
        <span>Enddatum: </span>
        {new Date(reservation?.endDate).toLocaleDateString()}
      </p>
      <Link to={`/boats/${reservation?.boatId}`}>
        <p>
          <span>Bootsname: </span> {boatDetails?.boatName}
        </p>
      </Link>
      <p>
        <span>Buchungsname: </span> {reservation?.reservationName}
      </p>
      <p>
        <span>Buchungsnummer: </span> {reservation?.reservationNumber}
      </p>
      <div className="change-res">
        <DeleteReservation reservationId={reservation?._id} />
        <EditReservation reservation={reservation} />
      </div>
    </div>
  );
};

export default ReservationCard;
