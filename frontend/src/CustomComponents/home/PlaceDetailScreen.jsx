import { useLocation } from "react-router-dom";

export default function PlaceDetailScreen() {
  const { state } = useLocation();
  const { event } = state || {}; // Destructure event data from state

  if (!event) {
    return <div>No event data found.</div>;
  }

  return (
    <div className="py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold">{event.placeName}</h1>
        <p className="text-xl mt-2">{event.description}</p>
        <p className="text-lg mt-4">Location: {event.location?.locationName}</p>
        <p className="text-lg mt-2">Tickets Left: {event.maxTicket - event.soldTicket}</p>
        <p className="text-lg mt-2">Price: ${event.ticketPrice}</p>
        <p className="text-lg mt-2">Event Date: {new Date(event.eventDate).toLocaleDateString()}</p>
        <p className="text-lg mt-2">Event Time: {event.eventTime}</p>
      </div>
    </div>
  );
}
