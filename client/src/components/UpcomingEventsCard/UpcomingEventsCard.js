import React from 'react';
import "./UpcomingEventsCard.css";
// import { prependOnceListener } from 'cluster';
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const UpcomingEventsCard = (props) => {
  return(
      <Card color="pink" size="small">
        <Link className="UpcomingEventsCard" to="#">
          <span className="UpcomingEventsCard__name">{props.name}</span>
          <span className="UpcomingEventsCard__date">Date: {props.date}</span>
          <span className="UpcomingEventsCard__time">Time: {props.time}</span>
          <span className="UpcomingEventsCard__location">Location: {props.location}</span>
        </Link>
      </Card>
  );
}

export default UpcomingEventsCard;
