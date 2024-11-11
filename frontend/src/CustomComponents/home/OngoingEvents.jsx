import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const OngoingEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [userCity, setCity] = useState(null); // State to store city value

  useEffect(() => {
    // Setting userCity only when the component mounts and city is found in localStorage
    const city = JSON.parse(localStorage.getItem("selectedLocation"));
    if (city) {
      setCity(city.city); // Update the city only once
    }
  }, []); // Empty dependency array ensures this only runs once

  useEffect(() => {
    // if (!userCity) return; // Skip API call if userCity is not set

    const fetchTopSoldEvents = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await fetch(
         userCity==null?`http://localhost:8080/api/events/ongoing?&page=${page}&size=5`: `http://localhost:8080/api/events/ongoing?city=${userCity}&page=${page}&size=5`, // Fixed the query string format
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch ongoing events");

        const data = await response.json();
        setEvents(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Unable to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopSoldEvents();
  }, [page, userCity]); // Trigger fetch when the page or userCity changes

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return <div>Loading ongoing events...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="mt-8 p-4">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">Ongoing Events</h3>
        <Carousel opts={{ align: "start" }} className="w-full max-w-7xl">
          <CarouselPrevious onClick={handlePreviousPage} disabled={page === 0}>
            <span className="text-white">{"<"}</span>
          </CarouselPrevious>
          <CarouselContent>
            {events.length > 0 ? (
              events.map((event) => (
                <CarouselItem
                  key={event.placeId}
                  className="md:basis-1/3 lg:basis-1/4"
                >
                  <div className="p-1">
                  <Link to={`/place/${event.placeId}`}state={{ eventData: event }}>
                    <Card>
                      <CardContent className="flex flex-col items-center p-6">
                        <span className="text-xl font-semibold">
                          {event.placeName}
                        </span>
                        <span className="text-md mt-2">
                          Remaining Tickets: {event.maxTicket - event.soldTicket}
                        </span>
                        <p className="text-sm mt-1">{event.description}</p>
                      </CardContent>
                      </Card>
                      </Link>
                  </div>
                </CarouselItem>
              ))
            ) : (
              <div>No events available.</div>
            )}
          </CarouselContent>
          <CarouselNext onClick={handleNextPage} disabled={page === totalPages - 1}>
            <span className="text-white">{">"}</span>
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};

export default OngoingEvent;
