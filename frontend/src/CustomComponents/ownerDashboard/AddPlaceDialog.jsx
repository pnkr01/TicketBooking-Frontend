// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addPlace } from "@/services/addPlaceApi";
import Select, { components } from "react-select";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AddPlaceDialog = ({ open, onClose }) => {
  const navigate = useNavigate();

  const [placeName, setPlaceName] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const [ticketPrice, setTicketPrice] = useState();
  const [openDate, setOpenDate] = useState(new Date());
  const [openTimeFrom, setOpenTimeFrom] = useState("09:00");
  const [openTimeTo, setOpenTimeTo] = useState("18:00");
  const [maxTicket, setMaxTicket] = useState();

  const [locationOptions, setLocationOptions] = useState([]);
  const user = JSON.parse(localStorage.getItem("userData"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("location ", location.value);

    const placeData = {
      location: {
        locationId: location.value, // Now this should correctly refer to locationId
      },
      addedBy: {
        userId: user.userId,
      },
      placeName: placeName,
      description: description,
      ticketPrice: ticketPrice,
      maxTicket: maxTicket,
      soldTicket: 0,
      openTiming: openTimeFrom + " - " + openTimeTo,
      eventFromDate: openDate,
      eventToDate: openDate,
      openDays: "Mon-Sun",
      ticketPricings: [
        {
          customerType: "ADULT",
          price: ticketPrice,
          seasonalModifier: "festival",
        },
        {
          customerType: "CHILD",
          price: ticketPrice,
          seasonalModifier: "festival",
        },
        {
          customerType: "SENIOR",
          price: ticketPrice,
          seasonalModifier: "festival",
        },
      ],
    };
    console.log(placeData);

    try {
      const response = await addPlace(placeData);
      console.log("Event created successfully:", response.data);
      toast.success("Place added successfully");
      navigate("/owner");
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/locations/get-all-locations")
      .then((response) => {
        console.log(response);
        const locations = response?.data;
        const ops = locations.map((element) => ({
          label: element.locationName, // Display name for the dropdown
          value: element.locationId, // Unique identifier for the location
        }));
        setLocationOptions(ops);
        console.log(locations);
        console.log(locationOptions);
      })
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  const Input = (props) => (
    <components.Input
      {...props}
      inputClassName="outline-none border-none shadow-none focus:ring-transparent"
    />
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl rounded-lg p-8 shadow-lg overflow-auto max-h-[80vh] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Add Place
          </DialogTitle>
          {/* <DialogDescription className="text-gray-500">
            Enter place details below.
          </DialogDescription> */}
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter place name"
              required
              className="mt-1 block w-full border border-gray-300 p-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setPlaceName(e.target.value)}
            />
          </div>

          {/* Location Field */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Location
            </label>
            <Select
              name="Location"
              options={locationOptions}
              value={location}
              onChange={setLocation}
              components={{ Input }}
              required
            />
          </div>

          {/* Description Field */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Describe the place"
              required
              className="mt-1 block w-full border border-gray-300 p-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Ticket Price Field */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="ticketPrice"
                className="block text-sm font-medium text-gray-700"
              >
                Ticket Price
              </label>
              <input
                id="ticketPrice"
                type="text"
                placeholder="Enter ticket price"
                required
                className="mt-1 block w-full border border-gray-300 p-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => setTicketPrice(e.target.value)}
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="maxTicket"
                className="block text-sm font-medium text-gray-700"
              >
                Max Tickets Available
              </label>
              <input
                id="ticketPrice"
                type="text"
                placeholder="Enter ticket availability"
                required
                className="mt-1 block w-full border border-gray-300 p-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => setMaxTicket(e.target.value)}
              />
            </div>
          </div>
          {/* Open Date Field */}
          <div>
            <label
              htmlFor="openDate"
              className="block text-sm font-medium text-gray-700"
            >
              Open Date
            </label>
            <DatePicker
              selected={openDate}
              onChange={(date) => setOpenDate(date)}
              dateFormat="MM/dd/yyyy"
              className="mt-1 block w-full border border-gray-300 p-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="openDate"
            />
          </div>
          {/* Open Timings Fields */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="openTimeFrom"
                className="block text-sm font-medium text-gray-700"
              >
                Open Timing (From)
              </label>
              <input
                aria-label="Time"
                type="time"
                className="mt-1 block w-full border border-gray-300 p-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="openTimeFrom"
                onChange={(e) => setOpenTimeFrom(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="openTimeTo"
                className="block text-sm font-medium text-gray-700"
              >
                Open Timing (To)
              </label>
              <input
                aria-label="Time"
                type="time"
                className="mt-1 block w-full border border-gray-300 p-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="openTimeTo"
                onChange={(e) => setOpenTimeTo(e.target.value)}
              />
            </div>
          </div>

          {/* Add Pictures Field */}
          {/* <div>
            <label
              htmlFor="pictures"
              className="block text-sm font-medium text-gray-700"
            >
              Add Pictures
            </label>
            <input
              id="pictures"
              type="file"
              multiple
              accept="image/*"
              className="mt-1 block w-full border border-gray-300 p-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div> */}

          {/* Submit Button */}
          <DialogFooter className="mt-6">
            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white hover:bg-indigo-500 p-3 rounded-lg font-semibold"
            >
              Add Place
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlaceDialog;
