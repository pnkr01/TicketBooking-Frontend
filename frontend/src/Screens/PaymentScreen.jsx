import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import axios from "axios";

const PaymentScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // Access booking data passed from the BookTicketScreen
  const { bookingData } = location.state;
  const bTicketId = bookingData.ticketId;

  // Handle the payment process
  const handlePayment = async () => {
    const jwt = localStorage.getItem("jwtToken");
    const userData = JSON.parse(localStorage.getItem("userData"));
    const email = userData ? userData.email : null;  // Extract email from userData
    const bookingData = location.state?.bookingData;

    if (!jwt) {
      alert("Please log in first");
      return;
    }

    try {
      // Prepare the request body for booking
      const bookingRequestBody = {};

      const response = await axios.post(
        `http://localhost:8080/api/payments/book-ticket/${bTicketId}`,
        bookingRequestBody,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (response.status === 201) {
        // Prepare the request body for QR code creation
        const qrCodeRequestBody = {
          ticket: {
            ticketId: bookingData.ticketId,
          },
          noOfPass: bookingData.totalMember,
          status: "ACTIVE",
        };

        // Generate QR code and send email
        axios
          .post(
            `http://localhost:8080/api/qrcodes/create-qr-code`,
            qrCodeRequestBody,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
              },
            }
          )
          .then((qrResponse) => {
            console.log("QR code generated:", qrResponse);
            alert("QR code is generated and a confirmation email is sent.");
            navigate("/bookings");
            // Call the email sending endpoint
             axios
              .post(
                `http://localhost:8080/api/payments/send-email/${email}`,
                {
                  ticketId: bookingData.ticketId,
                  noOfPass: bookingData.totalMember,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                  },
                }
              )
              .then((emailResponse) => {
                console.log('Email sent successfully:', emailResponse.data);
                
              })
              .catch((emailError) => {
                console.error('Error sending email:', emailError);
                setError("Failed to send email.");
              });
          })
          .catch((qrError) => {
            console.error("Error generating QR code:", qrError);
            setError("Failed to generate QR code");
          });
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (err) {
      if (err.response) {
        const errorMessage =
          err.response.data.message || "An unexpected error occurred";
        setError(errorMessage);
      } else {
        setError("Network error or server not reachable");
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg m-10 border border-gray-300">
      {/* Payment Details */}
      <h1 className="text-2xl font-bold mb-4">Payment Details</h1>
      <div className="mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Booking Date:</span>
          <span>{new Date(bookingData.bookingDate).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-600">Total Members:</span>
          <span>{bookingData.totalMember}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-600">Total Price:</span>
          <span>Rs {bookingData.totalPrice}</span>
        </div>
      </div>

      {/* Payment Button */}
      <div className="text-center mt-6">
        <Button
          onClick={handlePayment}
          className="w-full bg-green-600 text-white hover:bg-green-500 p-3 rounded-lg font-semibold"
        >
          Confirm Payment
        </Button>
      </div>

      {/* Display error if any */}
      {error && <div className="mt-4 text-red-600">{error}</div>}
    </div>
  );
};

export default PaymentScreen;
