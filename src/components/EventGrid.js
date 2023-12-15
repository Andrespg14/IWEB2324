//import CloudinaryImage from "./CloudinaryImage";

import { Link } from "react-router-dom/";

const EventGrid = ({ events, title }) => {
  return (
    <div className="event-body">
      <h2 className="title">{title}</h2>
      <div className="event-list">
        <ul className="list-group">
          {events.map((event) => (
            <li className="list-group-item">
              <div className="event-preview" key={event._id}>
                <h2>{event.nombre}</h2>
                <h2>{event.organizador}</h2>
                <Link to={`/eventDetails?EventId=${event._id}`}>
                  <button type="button">Detalles</button>
                </Link>
                <Link to={`/eventDetails?EventId=${event._id}`}>
                  <button type="button">Modificar</button>
                </Link>
                <Link to={`/eventDetails?EventId=${event._id}`}>
                  <button type="button">Borrar</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventGrid;
