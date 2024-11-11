/* eslint-disable react/prop-types */

// // // import { Button } from "@/components/ui/button";
// // // import React, { useState } from "react";
// // // import DatePicker from "react-datepicker";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import axios from "axios";

// // // const BookTicketScreen = () => {
// // //   const [bookingDate, setBookingDate] = useState(null);
// // //   const [members, setMembers] = useState(1);
// // //   const navigate = useNavigate();

// // //   // Handle proceeding to the payment page
// // //   const handlePayment = async () => {
// // //     // Fetch JWT from localStorage
// // //     const jwt = localStorage.getItem("jwtToken");

// // //     // Check if the JWT exists
// // //     if (!jwt) {
// // //       alert("Please log in first");
// // //       return;
// // //     }

// // //     // Prepare booking data to send to the backend
// // //     const bookingData = {
// // //       "user": {
// // //           "userId": 6
// // //       },
// // //       "place": {
// // //           "placeId": 9
// // //       },
// // //       "totalMember": 3,
// // //       "ticketDetails": "Row 3 ",
// // //       "totalPrice": 150.00,
// // //       "status": "BOOKED",
// // //       "bookingDate": "2024-10-28"
// // //   }

// // //     try {
// // //       // Send a POST request to create the ticket booking
// // //       const response = await axios.post(
// // //         "http://localhost:8080/api/ticketBookings/create-ticket-booking",
// // //         bookingData,
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${jwt}`,
// // //           },
// // //         }
// // //       );

// // //       // Check if the booking was successful
// // //       if (response.status === 200) {
// // //         console.log("Ticket booking created successfully:", response.data);
// // //         // Navigate to the payment page and pass the booking data
// // //         navigate("/book/payment", { state: { bookingData } });
// // //       } else {
// // //         alert("Booking failed. Please try again.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error creating ticket booking:", error);
// // //       alert("An error occurred while processing your booking. Please try again.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg m-10 border border-gray-300">
// // //       {/* Header */}
// // //       <div className="border-b pb-4 mb-4">
// // //         <h1 className="text-2xl font-bold">Name</h1>
// // //         <p className="text-gray-600 mt-1">Description</p>
// // //       </div>

// // //       {/* Booking Details */}
// // //       <div className="flex justify-between gap-4">
// // //         <div className="flex-1">
// // //           <label className="block text-sm font-semibold">Booking Date</label>
// // //           <DatePicker
// // //             selected={bookingDate}
// // //             onChange={(date) => setBookingDate(date)}
// // //             dateFormat="dd/MM/yyyy"
// // //             className="mt-2 block w-full border border-gray-300 p-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 full-width-datepicker"
// // //             placeholderText="Select a date"
// // //             style={{ width: "100%" }}
// // //           />
// // //         </div>

// // //         <div className="flex-1">
// // //           <label className="block text-sm font-semibold">
// // //             Number of Members
// // //           </label>
// // //           <input
// // //             type="number"
// // //             value={members}
// // //             onChange={(e) => {
// // //               const value = e.target.value;
// // //               setMembers(value === "" ? 0 : parseInt(value, 10));
// // //             }}
// // //             min="1"
// // //             className="mt-2 block w-full border border-gray-300 p-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// // //             placeholder="Enter number of members"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* Price Summary */}
// // //       <div className="mt-6 border-t pt-4">
// // //         <h2 className="text-lg font-semibold">Price Summary</h2>
// // //         <div className="flex justify-between mt-2">
// // //           <span className="text-gray-600">Total Members</span>
// // //           <span>{members}</span>
// // //         </div>
// // //         <div className="flex justify-between mt-1">
// // //           <span className="text-gray-600">Price per Member</span>
// // //           <span>$500</span>
// // //         </div>
// // //         <div className="flex justify-between font-bold mt-3 border-t pt-3">
// // //           <span>Total Price</span>
// // //           <span>${members * 500}</span>
// // //         </div>
// // //       </div>

// // //       {/* Make Payment Button */}
// // //       <div className="text-center mt-6">
// // //         <Button
// // //           onClick={handlePayment}
// // //           disabled={members === 0}
// // //           className="w-full bg-red-600 text-white hover:bg-red-500 p-3 rounded-lg font-semibold"
// // //         >
// // //           Make Payment
// // //         </Button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BookTicketScreen;

// // import { Button } from "@/components/ui/button";
// // import React, { useState } from "react";
// // import DatePicker from "react-datepicker";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const BookTicketScreen = ({ userId, placeId }) => {
// //   const [bookingDate, setBookingDate] = useState(null);
// //   const [members, setMembers] = useState(1);
// //   const navigate = useNavigate();

// //   const handlePayment = async () => {
// //     const jwt = localStorage.getItem("jwtToken");

// //     if (!jwt) {
// //       alert("Please log in first");
// //       return;
// //     }

// //     const bookingData = {
// //       user: { userId },
// //       place: { placeId },
// //       totalMember: members,
// //       ticketDetails: "Ticket for selected event",
// //       totalPrice: members * 500,
// //       status: "BOOKED",
// //       bookingDate: bookingDate?.toISOString().split("T")[0] || "2024-10-28", // Format as needed
// //     };

// //     try {
// //       // const response = await axios.post(
// //       //   "http://localhost:8080/api/ticketBookings/create-ticket-booking",
// //       //   bookingData,
// //       //   {
// //       //     headers: {
// //       //       Authorization: `Bearer ${jwt}`,
// //       //     },
// //       //   }
// //       // );

// //       console.log(bookingData);

// //       // if (response.status === 200) {
// //       //   console.log("Ticket booking created successfully:", response.data);
// //       //   navigate("/book/payment", { state: { bookingData } });
// //       // } else {
// //       //   alert("Booking failed. Please try again.");
// //       // }
// //     } catch (error) {
// //       console.error("Error creating ticket booking:", error);
// //       alert("An error occurred while processing your booking. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg m-10 border border-gray-300">
// //       <div className="border-b pb-4 mb-4">
// //         <h1 className="text-2xl font-bold">Place Name</h1>
// //         <p className="text-gray-600 mt-1">Place Description</p>
// //       </div>

// //       <div className="flex justify-between gap-4">
// //         <div className="flex-1">
// //           <label className="block text-sm font-semibold">Booking Date</label>
// //           <DatePicker
// //             selected={bookingDate}
// //             onChange={(date) => setBookingDate(date)}
// //             dateFormat="dd/MM/yyyy"
// //             className="mt-2 block w-full border border-gray-300 p-2 rounded-lg"
// //             placeholderText="Select a date"
// //           />
// //         </div>

// //         <div className="flex-1">
// //           <label className="block text-sm font-semibold">Number of Members</label>
// //           <input
// //             type="number"
// //             value={members}
// //             onChange={(e) => setMembers(e.target.value ? parseInt(e.target.value) : 1)}
// //             min="1"
// //             className="mt-2 block w-full border border-gray-300 p-2 rounded-lg"
// //             placeholder="Enter number of members"
// //           />
// //         </div>
// //       </div>

// //       <div className="mt-6 border-t pt-4">
// //         <h2 className="text-lg font-semibold">Price Summary</h2>
// //         <div className="flex justify-between mt-2">
// //           <span>Total Members</span>
// //           <span>{members}</span>
// //         </div>
// //         <div className="flex justify-between mt-1">
// //           <span>Price per Member</span>
// //           <span>{ }</span>
// //         </div>
// //         <div className="flex justify-between font-bold mt-3 border-t pt-3">
// //           <span>Total Price</span>
// //           <span>${members * 500}</span>
// //         </div>
// //       </div>

// //       <div className="text-center mt-6">
// //         <Button
// //           onClick={handlePayment}
// //           disabled={members === 0}
// //           className="w-full bg-red-600 text-white hover:bg-red-500 p-3 rounded-lg font-semibold"
// //         >
// //           Make Payment
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BookTicketScreen;

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import DatePicker from "react-datepicker";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const BookTicketScreen = () => {
//   const [bookingDate, setBookingDate] = useState(null);
//   const [members, setMembers] = useState(1);
//   const [ticketPrice, setTicketPrice] = useState(500); // Set default ticket price or fetch from backend
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Fetch the userId and placeId
//   const userId = localStorage.getItem("userId"); // Adjust based on how userId is stored
//   const placeId = location.state?.placeId || 9;  // Get placeId passed from the previous page

//   // Handle booking process
//   const handlePayment = async () => {
//     const jwt = localStorage.getItem("jwtToken");

//     if (!jwt) {
//       alert("Please log in first");
//       return;
//     }

//     // Prepare booking data
//     const bookingData = {
//       user: { userId },
//       place: { placeId },
//       totalMember: members,
//       ticketDetails: "Row 3 ",
//       totalPrice: members * ticketPrice,
//       status: "BOOKED",
//       bookingDate: bookingDate ? bookingDate.toISOString() : new Date().toISOString()
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/ticketBookings/create-ticket-booking",
//         bookingData,
//         { headers: { Authorization: `Bearer ${jwt}` } }
//       );

//       if (response.status === 200) {
//         console.log("Ticket booking created successfully:", response.data);
//         navigate("/book/payment", { state: { bookingData } });
//       } else {
//         alert("Booking failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error creating ticket booking:", error);
//       alert("An error occurred while processing your booking.");
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg m-10 border border-gray-300">
//       <div className="border-b pb-4 mb-4">
//         <h1 className="text-2xl font-bold">Name</h1>
//         <p className="text-gray-600 mt-1">Description</p>
//       </div>
//       <div className="flex justify-between gap-4">
//         <div className="flex-1">
//           <label className="block text-sm font-semibold">Booking Date</label>
//           <DatePicker
//             selected={bookingDate}
//             onChange={(date) => setBookingDate(date)}
//             dateFormat="dd/MM/yyyy"
//             className="mt-2 block w-full border p-2 placeholder-gray-500 rounded-lg focus:ring-2"
//             placeholderText="Select a date"
//           />
//         </div>
//         <div className="flex-1">
//           <label className="block text-sm font-semibold">Number of Members</label>
//           <input
//             type="number"
//             value={members}
//             onChange={(e) => setMembers(e.target.value ? parseInt(e.target.value, 10) : 1)}
//             min="1"
//             className="mt-2 block w-full border p-2 placeholder-gray-500 rounded-lg focus:ring-2"
//             placeholder="Enter number of members"
//           />
//         </div>
//       </div>
//       <div className="mt-6 border-t pt-4">
//         <h2 className="text-lg font-semibold">Price Summary</h2>
//         <div className="flex justify-between mt-2">
//           <span>Total Members</span>
//           <span>{members}</span>
//         </div>
//         <div className="flex justify-between mt-1">
//           <span>Price per Member</span>
//           <span>${ticketPrice}</span>
//         </div>
//         <div className="flex justify-between font-bold mt-3 border-t pt-3">
//           <span>Total Price</span>
//           <span>${members * ticketPrice}</span>
//         </div>
//       </div>
//       <div className="text-center mt-6">
//         <Button
//           onClick={handlePayment}
//           disabled={members === 0}
//           className="w-full bg-red-600 text-white p-3 rounded-lg font-semibold"
//         >
//           Make Payment
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default BookTicketScreen;

import { Button } from "@/components/ui/button";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookTicketScreen = ({ eventData }) => {
  const [bookingDate, setBookingDate] = useState(null);
  const [members, setMembers] = useState(1);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  console.log(eventData);


  // const userId = eventData.eventData.userId;
  const placeId = eventData.eventData.placeId;
  const ticketPrice = eventData.eventData.ticketPrice;

  const handlePayment = async () => {
    const jwt = localStorage.getItem("jwtToken");
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userId = userData ? userData.userId : null;

    if (!jwt) {
      alert("Please log in first");
      return;
    }

    const bookingData = {
      user: {
        userId: userId,
      },
      place: {
        placeId: placeId,
      },
      totalMember: members,
      ticketDetails: `Place id is ${placeId}, price per member is ${ticketPrice} and total booking price for member is ${members} and total price is ${
        ticketPrice * members
      } `,
      totalPrice: 150.0,
      status: "BOOKED",
      bookingDate: "2024-10-28",
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/api/ticketBookings/create-ticket-booking",
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (response.status === 201) {
        const bookingResData = response.data;
        console.log("Ticket booking created successfully:", bookingResData);
        navigate("/book/payment", { state: { bookingData: bookingResData } });
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (err) {
      if (err.response) {
        // Extract error message if available
        const errorMessage =
          err.response.data.message || "An unexpected error occurred";
        setError(errorMessage);
      } else {
        // Handle network error or if no response
        setError("Network error or server not reachable");
      }
    }
    // alert("An error occurred while processing your booking. Please try again.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg m-10 border border-gray-300">
      <div className="border-b pb-4 mb-4">
        <h1 className="text-2xl font-bold">{eventData.eventData.placeName}</h1>
        <p className="text-gray-600 mt-1">{eventData.eventData.description}</p>
      </div>

      <div className="flex justify-between gap-4">
        <div className="flex-1">
          <label className="block text-sm font-semibold">Booking Date</label>
          <DatePicker
            selected={bookingDate}
            onChange={(date) => setBookingDate(date)}
            dateFormat="dd/MM/yyyy"
            className="mt-2 block w-full border border-gray-300 p-2 rounded-lg"
            placeholderText="Select a date"
            minDate={new Date()}
            // maxDate={toDate}
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-semibold">
            Number of Members
          </label>
          <input
            type="number"
            value={members}
            onChange={(e) =>
              setMembers(e.target.value ? parseInt(e.target.value) : 1)
            }
            min="1"
            className="mt-2 block w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter number of members"
          />
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <h2 className="text-lg font-semibold">Price Summary</h2>
        <div className="flex justify-between mt-2">
          <span>Total Members</span>
          <span>{members}</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>Price per Member</span>
          <span>Rs {eventData.eventData.ticketPrice}</span>
        </div>
        <div className="flex justify-between font-bold mt-3 border-t pt-3">
          <span>Total Price</span>
          <span>Rs {members * ticketPrice}</span>
        </div>
      </div>

      <div>{error && <div style={errorMessageStyle}>{error}</div>}</div>

      <div className="text-center mt-6">
        <Button
          onClick={handlePayment}
          disabled={members === 0 || !bookingDate}
          className="w-full bg-red-600 text-white hover:bg-red-500 p-3 rounded-lg font-semibold"
        >
          Make Payment
        </Button>
      </div>
    </div>
  );
};

const errorMessageStyle = {
  color: "red",
  fontSize: "14px",
  paddingTop: "20px", // Padding from top
  textAlign: "center", // Centering the text
  // border: '1px solid red',
  // backgroundColor: '#f8d7da',
  // borderRadius: '5px',
  // marginTop: '20px', // Optionally, add margin from top to give some space between other elements
};
export default BookTicketScreen;
