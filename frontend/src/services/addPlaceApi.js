import axios from "axios";

const baseURL = "http://localhost:8080";

const jwt = localStorage.getItem("jwtToken");

const api = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  headers: {
    "content-type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${jwt}`,
  },
});

export const addPlace = async ({
  location,
  placeName,
  description,
  ticketPrice,
  openTiming,
  openDays,
  eventFromDate,
  eventToDate,
  addedBy,
  maxTicket,
  soldTicket,
  ticketPricings,
}) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post("/api/events/create-event", {
      placeName,
      description,
      location: {
        locationId: location.locationId,
      },
      addedBy: {
        userId: addedBy.userId,
      },
      openTiming,
      openDays,
      maxTicket,
      eventFromDate,
      eventToDate,
      soldTicket,
      ticketPrice,
      ticketPricings, // array of ticket pricing objects
    });
    return response;
  } catch (error) {
    throw error;
  }
};
