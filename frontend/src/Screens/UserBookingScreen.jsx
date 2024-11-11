// // // import BookingCard from "@/CustomComponents/userBooking/BookingCard";
// // // import React from "react";

// // // const UserBookingScreen = () => {
// // //   return (
// // //     <>
// // //       <div className="max-w-7xl mx-auto flex flex-col justify-center items-center my-8 gap-8 bg-gray-100">
// // //         <h1 className="text-2xl font-bold">Your Bookings</h1>
// // //         <div className="bg-white p-2 rounded-lg shadow-lg w-full border border-gray-300">
// // //           <div className="flex justify-between p-4">
// // //             <h1 className="text-2xl font-bold">Upcoming Bookings</h1>
// // //           </div>

// // //           <BookingCard type={"upcoming"}/>
// // //         </div>

// // //         <div className="bg-white p-2 rounded-lg shadow-lg w-full border border-gray-300">
// // //           <div className="flex justify-between p-4">
// // //             <h1 className="text-2xl font-bold">Previous Bookings</h1>
// // //           </div>

// // //           <BookingCard type={"previous"}/>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default UserBookingScreen;


// // // import BookingCard from "@/CustomComponents/userBooking/BookingCard";
// // // import React from "react";

// // // const UserBookingScreen = () => {
// // //   return (
// // //     <div className="max-w-7xl mx-auto flex flex-col justify-center items-center my-8 gap-8 bg-gray-100">
// // //       <h1 className="text-2xl font-bold">Your Bookings</h1>
// // //       <div className="bg-white p-2 rounded-lg shadow-lg w-full border border-gray-300">
// // //         <div className="flex justify-between p-4">
// // //           <h1 className="text-2xl font-bold">Upcoming Bookings</h1>
// // //         </div>
// // //         <BookingCard type={"upcoming"} />
// // //       </div>

// // //       <div className="bg-white p-2 rounded-lg shadow-lg w-full border border-gray-300">
// // //         <div className="flex justify-between p-4">
// // //           <h1 className="text-2xl font-bold">Previous Bookings</h1>
// // //         </div>
// // //         <BookingCard type={"previous"} />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UserBookingScreen;

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';

// // // function BookingList() {
// // //     const [bookings, setBookings] = useState([]);
// // //     const [qrCode, setQrCode] = useState(null);
// // //     const navigate = useNavigate();
// // //     const userData = JSON.parse(localStorage.getItem("userData"));
    
// // //     useEffect(() => {
// // //         fetchUserBookings();
// // //     }, []);

// // //     const fetchUserBookings = async () => {
// // //         try {
// // //             const userId = userData.userId;
// // //             if (!userId) {
// // //                 console.error('User ID not found in local storage.');
// // //                 return;
// // //             }

// // //             const token = localStorage.getItem('jwtToken');
// // //             const response = await axios.get(
// // //                 `http://localhost:8080/api/ticketBookings/get-user-ticket-bookings/${userId}`,
// // //                 {
// // //                     headers: {
// // //                         'Authorization': `Bearer ${token}`,
// // //                         'Content-Type': 'application/json'
// // //                     }
// // //                 }
// // //             );
// // //             setBookings(response.data);
// // //         } catch (error) {
// // //             console.error("Error fetching bookings", error);
// // //         }
// // //     };

// // //     return (
// // //         <div style={styles.container}>
// // //             <h2 style={styles.heading}>Your Bookings</h2>
// // //             <div style={styles.cardContainer}>
// // //                 {bookings.map((booking) => (
// // //                     <div key={booking.ticketId} style={styles.card}>
// // //                         <div style={styles.cardContent}>
// // //                             <div style={styles.details}>
// // //                                 <p><span style={styles.label}>Booking ID:</span> {booking.ticketId}</p>
// // //                                 <p><span style={styles.label}>Event ID:</span> {booking.placeId}</p>
// // //                                 <p><span style={styles.label}>Booking Date:</span> {booking.bookingDate}</p>
// // //                                 <p><span style={styles.label}>Total Price:</span> Rs {booking.totalPrice.toFixed(2)}</p>
// // //                                 <p><span style={styles.label}>Status:</span> {booking.status}</p>
// // //                                 <p><span style={styles.label}>Total Members:</span> {booking.totalMember}</p>
// // //                             </div>
// // //                             <button style={styles.button}>Get QR Code</button>
// // //                         </div>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //             {qrCode && (
// // //                 <div style={styles.qrCodeContainer}>
// // //                     <h3>QR Code</h3>
// // //                     <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" style={styles.qrCodeImage} />
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // }

// // // const styles = {
// // //     container: {
// // //         display: 'flex',
// // //         flexDirection: 'column',
// // //         alignItems: 'center',
// // //         padding: '20px',
// // //     },
// // //     heading: {
// // //         fontSize: '2rem',
// // //         color: '#333',
// // //         marginBottom: '20px',
// // //     },
// // //     cardContainer: {
// // //         display: 'grid',
// // //         gridTemplateColumns: '1fr',
// // //         gap: '20px',
// // //         width: '100%',
// // //         maxWidth: '1200px',
// // //     },
// // //     card: {
// // //         border: '1px solid #ddd',
// // //         borderRadius: '8px',
// // //         padding: '15px',
// // //         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
// // //         backgroundColor: '#fff',
// // //     },
// // //     cardContent: {
// // //         display: 'flex',
// // //         alignItems: 'center',
// // //         justifyContent: 'space-between',
// // //     },
// // //     details: {
// // //         display: 'flex',
// // //         flexDirection: 'column',
// // //         gap: '5px',
// // //         marginRight: '20px',
// // //     },
// // //     label: {
// // //         fontWeight: 'bold',
// // //         color: '#555',
// // //     },
// // //     button: {
// // //         padding: '10px 20px',
// // //         fontSize: '0.9rem',
// // //         color: '#fff',
// // //         backgroundColor: '#4CAF50',
// // //         border: 'none',
// // //         borderRadius: '5px',
// // //         cursor: 'pointer',
// // //     },
// // //     qrCodeContainer: {
// // //         marginTop: '20px',
// // //         textAlign: 'center',
// // //     },
// // //     qrCodeImage: {
// // //         width: '150px',
// // //         height: '150px',
// // //         marginTop: '10px',
// // //     }
// // // };

// // // export default BookingList;


// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
// // // import QRCode from 'qrcode.react'; // Import the QR code component

// // // function BookingList() {
// // //     const [bookings, setBookings] = useState([]);
// // //     const [qrCode, setQrCode] = useState(null);
// // //     const [selectedTicketId, setSelectedTicketId] = useState(null);
// // //     const navigate = useNavigate();
// // //     const userData = JSON.parse(localStorage.getItem("userData"));

// // //     useEffect(() => {
// // //         fetchUserBookings();
// // //     }, []);

// // //     const fetchUserBookings = async () => {
// // //         try {
// // //             const userId = userData.userId;
// // //             const token = localStorage.getItem('jwtToken');

// // //             const response = await axios.get(
// // //                 `http://localhost:8080/api/ticketBookings/get-user-ticket-bookings/${userId}`,
// // //                 {
// // //                     headers: {
// // //                         'Authorization': `Bearer ${token}`,
// // //                         'Content-Type': 'application/json'
// // //                     }
// // //                 }
// // //             );
// // //             setBookings(response.data);
// // //         } catch (error) {
// // //             console.error("Error fetching bookings", error);
// // //         }
// // //     };

// // //     const fetchQRCode = async (ticketId) => {
// // //       try {
// // //           setSelectedTicketId(ticketId);
// // //             const token = localStorage.getItem('jwtToken');
// // //             const response = await axios.get(
// // //                 `http://localhost:8080/api/qrcodes/get-qrcode-by-id/${ticketId}`,
// // //                 {
// // //                     headers: {
// // //                         'Authorization': `Bearer ${token}`,
// // //                         'Content-Type': 'application/json'
// // //                     }
// // //                 }
// // //             );
// // //             setQrCode(response.data.qrCode);
// // //         } catch (error) {
// // //             console.error("Error fetching QR code", error);
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <h2>Your Bookings</h2>
// // //             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
// // //                 {bookings.map((booking) => (
// // //                     <div key={booking.ticketId} style={{
// // //                         border: '1px solid #ccc',
// // //                         borderRadius: '8px',
// // //                         padding: '16px',
// // //                         width: '300px',
// // //                         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
// // //                         display: 'flex',
// // //                         flexDirection: 'column',
// // //                         alignItems: 'center'
// // //                     }}>
// // //                         <p><strong>Booking ID:</strong> {booking.ticketId}</p>
// // //                         <p><strong>Event ID:</strong> {booking.placeId}</p>
// // //                         <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
// // //                         <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
// // //                         <p><strong>Status:</strong> {booking.status}</p>
// // //                         <p><strong>Total Members:</strong> {booking.totalMember}</p>
// // //                         <button onClick={() => fetchQRCode(booking.ticketId)} style={{
// // //                             background: '#4CAF50',
// // //                             color: 'white',
// // //                             border: 'none',
// // //                             padding: '8px 12px',
// // //                             borderRadius: '4px',
// // //                             cursor: 'pointer'
// // //                         }}>Get QR</button>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //             {qrCode && selectedTicketId && (
// // //                 <div style={{ marginTop: '20px', textAlign: 'center' }}>
// // //                     <h3>QR Code for Ticket ID {selectedTicketId}</h3>
// // //                     <QRCode value={qrCode} size={150} />
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // }

// // // export default BookingList;


// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
// // // import QRCode from 'react-qr-code';



// // // function BookingList() {
// // //     const [bookings, setBookings] = useState([]);
// // //     const [qrCode, setQrCode] = useState(null);
// // //     const [selectedTicketId, setSelectedTicketId] = useState(null);
// // //     const navigate = useNavigate();
// // //     const userData = JSON.parse(localStorage.getItem("userData"));

// // //     useEffect(() => {
// // //         fetchUserBookings();
// // //     }, []);

// // //     const fetchUserBookings = async () => {
// // //         try {
// // //             const userId = userData?.userId;
// // //             const token = localStorage.getItem('jwtToken');

// // //             if (!userId || !token) {
// // //                 console.error("Missing user ID or JWT token.");
// // //                 return;
// // //             }

// // //             const response = await axios.get(
// // //                 `http://localhost:8080/api/ticketBookings/get-user-ticket-bookings/${userId}`,
// // //                 {
// // //                     headers: {
// // //                         'Authorization': `Bearer ${token}`,
// // //                         'Content-Type': 'application/json'
// // //                     }
// // //                 }
// // //             );
// // //             setBookings(response.data);
// // //         } catch (error) {
// // //             console.error("Error fetching bookings", error);
// // //         }
// // //     };

// // //     const fetchQRCode = async (ticketId) => {
// // //         try {
// // //             setSelectedTicketId(ticketId);
// // //             const token = localStorage.getItem('jwtToken');
// // //             const response = await axios.get(
// // //                 `http://localhost:8080/api/qrcodes/get-qrcode-by-id/${ticketId}`,
// // //                 {
// // //                     headers: {
// // //                         'Authorization': `Bearer ${token}`,
// // //                         'Content-Type': 'application/json'
// // //                     }
// // //                 }
// // //             );
// // //             setQrCode(response.data.qrCode);
// // //         } catch (error) {
// // //             console.error("Error fetching QR code", error);
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <h2>Your Bookings</h2>
// // //             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
// // //                 {bookings.map((booking) => (
// // //                     <div key={booking.ticketId} style={{
// // //                         border: '1px solid #ccc',
// // //                         borderRadius: '8px',
// // //                         padding: '16px',
// // //                         width: '300px',
// // //                         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
// // //                         display: 'flex',
// // //                         flexDirection: 'column',
// // //                         alignItems: 'center'
// // //                     }}>
// // //                         <p><strong>Booking ID:</strong> {booking.ticketId}</p>
// // //                         <p><strong>Event ID:</strong> {booking.placeId}</p>
// // //                         <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
// // //                         <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
// // //                         <p><strong>Status:</strong> {booking.status}</p>
// // //                         <p><strong>Total Members:</strong> {booking.totalMember}</p>
// // //                         <button onClick={() => fetchQRCode(booking.ticketId)} style={{
// // //                             background: '#4CAF50',
// // //                             color: 'white',
// // //                             border: 'none',
// // //                             padding: '8px 12px',
// // //                             borderRadius: '4px',
// // //                             cursor: 'pointer'
// // //                         }}>Get QR</button>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //             {qrCode ? (
// // //                 <div style={{ marginTop: '20px', textAlign: 'center' }}>
// // //                     <h3>QR Code for Ticket ID {selectedTicketId}</h3>
// // //                     <QRCode value={qrCode} size={150} />
// // //                 </div>
// // //             ) : (
// // //                 <div style={{ marginTop: '20px', textAlign: 'center', color: 'grey' }}>
// // //                     <p>Select a ticket to view its QR code</p>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // }

// // // export default BookingList;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import QRCode from 'react-qr-code'; // Import react-qr-code

// // function BookingList() {
// //     const [bookings, setBookings] = useState([]);
// //     const [qrCode, setQrCode] = useState(null);
// //     const [selectedTicketId, setSelectedTicketId] = useState(null);
// //     const navigate = useNavigate();
// //     const userData = JSON.parse(localStorage.getItem("userData"));

// //     useEffect(() => {
// //         fetchUserBookings();
// //     }, []);

// //     const fetchUserBookings = async () => {
// //         try {
// //             const userId = userData.userId;
// //             const token = localStorage.getItem('jwtToken');

// //             const response = await axios.get(
// //                 `http://localhost:8080/api/ticketBookings/get-user-ticket-bookings/${userId}`,
// //                 {
// //                     headers: {
// //                         'Authorization': `Bearer ${token}`,
// //                         'Content-Type': 'application/json'
// //                     }
// //                 }
// //             );
// //             setBookings(response.data);
// //         } catch (error) {
// //             console.error("Error fetching bookings", error);
// //         }
// //     };

// //     const fetchQRCode = async (ticketId) => {
// //       try {
// //           setSelectedTicketId(ticketId);
// //             // const token = localStorage.getItem('jwtToken');
// //             // const response = await axios.get(
// //             //     `http://localhost:8080/api/qrcodes/get-qrcode-by-id/${ticketId}`,
// //             //     {
// //             //         headers: {
// //             //             'Authorization': `Bearer ${token}`,
// //             //             'Content-Type': 'application/json'
// //             //         }
// //             //     }
// //             // );
// //             setQrCode("testtttttt");
// //         } catch (error) {
// //             console.error("Error fetching QR code", error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2>Your Bookings</h2>
// //             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
// //                 {bookings.map((booking) => (
// //                     <div key={booking.ticketId} style={{
// //                         border: '1px solid #ccc',
// //                         borderRadius: '8px',
// //                         padding: '16px',
// //                         width: '300px',
// //                         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
// //                         display: 'flex',
// //                         flexDirection: 'column',
// //                         alignItems: 'center'
// //                     }}>
// //                         <p><strong>Booking ID:</strong> {booking.ticketId}</p>
// //                         <p><strong>Event ID:</strong> {booking.placeId}</p>
// //                         <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
// //                         <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
// //                         <p><strong>Status:</strong> {booking.status}</p>
// //                         <p><strong>Total Members:</strong> {booking.totalMember}</p>
// //                         <button onClick={() => fetchQRCode(booking.ticketId)} style={{
// //                             background: '#4CAF50',
// //                             color: 'white',
// //                             border: 'none',
// //                             padding: '8px 12px',
// //                             borderRadius: '4px',
// //                             cursor: 'pointer'
// //                         }}>Get QR</button>
// //                     </div>
// //                 ))}
// //             </div>
// //             {qrCode && selectedTicketId && (
// //                 <div style={{ marginTop: '20px', textAlign: 'center' }}>
// //                     <h3>QR Code for Ticket ID {selectedTicketId}</h3>
// //                     <QRCode value={qrCode} size={150} />
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }

// // export default BookingList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import QRCode from 'react-qr-code';

// function BookingList() {
//     const [bookings, setBookings] = useState([]);
//     const [qrCode, setQrCode] = useState(null);
//     const [selectedTicketId, setSelectedTicketId] = useState(null);
//     const navigate = useNavigate();
//     const userData = JSON.parse(localStorage.getItem("userData"));

//     useEffect(() => {
//         fetchUserBookings();
//     }, []);

//     const fetchUserBookings = async () => {
//         try {
//             const userId = userData?.userId;
//             const token = localStorage.getItem('jwtToken');

//             if (!userId || !token) {
//                 console.error("Missing user ID or JWT token.");
//                 return;
//             }

//             const response = await axios.get(
//                 `http://localhost:8080/api/ticketBookings/get-user-ticket-bookings/${userId}`,
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     }
//                 }
//             );
//             setBookings(response.data);
//         } catch (error) {
//             console.error("Error fetching bookings", error);
//         }
//     };

//     const fetchQRCode = async (ticketId) => {
//         try {
//             setSelectedTicketId(ticketId);
//             const token = localStorage.getItem('jwtToken');
//             const response = await axios.get(
//                 `http://localhost:8080/api/qrcodes/get-qrcode-by-id/${ticketId}`,
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     }
//                 }
//             );
//             setQrCode(response.data.qrCode);
//         } catch (error) {
//             console.error("Error fetching QR code", error);
//         }
//     };

//     return (
//         <div>
//             <h2>Your Bookings</h2>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//                 {bookings.map((booking) => (
//                     <div key={booking.ticketId} style={{
//                         border: '1px solid #ccc',
//                         borderRadius: '8px',
//                         padding: '16px',
//                         width: '300px',
//                         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center'
//                     }}>
//                         <p><strong>Booking ID:</strong> {booking.ticketId}</p>
//                         <p><strong>Event ID:</strong> {booking.placeId}</p>
//                         <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
//                         <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
//                         <p><strong>Status:</strong> {booking.status}</p>
//                         <p><strong>Total Members:</strong> {booking.totalMember}</p>
//                         <button onClick={() => fetchQRCode(booking.ticketId)} style={{
//                             background: '#4CAF50',
//                             color: 'white',
//                             border: 'none',
//                             padding: '8px 12px',
//                             borderRadius: '4px',
//                             cursor: 'pointer'
//                         }}>Get QR</button>
//                     </div>
//                 ))}
//             </div>
//             {qrCode && selectedTicketId && (
//                 <div style={{ marginTop: '20px', textAlign: 'center' }}>
//                     <h3>QR Code for Ticket ID {selectedTicketId}</h3>
//                     <QRCode value={qrCode} size={150} />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default BookingList;
// // //
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import QRCode from 'react-qr-code';

// function BookingList() {
//     const [bookings, setBookings] = useState([]);
//     const [qrCode, setQrCode] = useState(null);
//     const [selectedTicketId, setSelectedTicketId] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const navigate = useNavigate();
//     const userData = JSON.parse(localStorage.getItem("userData"));

//     useEffect(() => {
//         fetchUserBookings();
//     }, []);

//     const fetchUserBookings = async () => {
//         try {
//             const userId = userData.userId;
//             if (!userId) {
//                 console.error('User ID not found in local storage.');
//                 return;
//             }

//             const token = localStorage.getItem('jwtToken');
//             const response = await axios.get(
//                 `http://localhost:8080/api/ticketBookings/get-user-ticket-bookings/${userId}`,
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     }
//                 }
//             );
//             setBookings(response.data);
//         } catch (error) {
//             console.error("Error fetching bookings", error);
//         }
//     };

//     const openModal = (ticketId) => {
//         setSelectedTicketId(ticketId);
//         fetchQRCode(ticketId);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setQrCode(null); // Clear QR code when modal is closed
//     };

//     const fetchQRCode = async (ticketId) => {
//         try {
//             const token = localStorage.getItem('jwtToken');
//             const response = await axios.get(
//                 `http://localhost:8080/api/qrcodes/get-qrcode-by-id/${ticketId}`,
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     }
//                 }
              
//           );
//           console.log(response);
//           console.log(response.data.qrCode);
//           setQrCode(response.data.qrCode);
//         } catch (error) {
//             console.error("Error fetching QR code", error);
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.heading}>Your Bookings</h2>
//             <div style={styles.cardContainer}>
//                 {bookings.map((booking) => (
//                     <div key={booking.ticketId} style={styles.card}>
//                         <div style={styles.cardContent}>
//                             <div style={styles.details}>
//                                 <p><span style={styles.label}>Booking ID:</span> {booking.ticketId}</p>
//                                 <p><span style={styles.label}>Event ID:</span> {booking.placeId}</p>
//                                 <p><span style={styles.label}>Booking Date:</span> {booking.bookingDate}</p>
//                                 <p><span style={styles.label}>Total Price:</span> ${booking.totalPrice.toFixed(2)}</p>
//                                 <p><span style={styles.label}>Status:</span> {booking.status}</p>
//                                 <p><span style={styles.label}>Total Members:</span> {booking.totalMember}</p>
//                             </div>
//                             <button
//                                 style={styles.button}
//                                 onClick={() => openModal(booking.ticketId)}
//                             >
//                                 Get QR Code
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Modal for displaying QR code */}
//             {isModalOpen && qrCode && (
//                 <div style={styles.modal}>
//                     <div style={styles.modalContent}>
//                         <h3>QR Code for Ticket ID {selectedTicketId}</h3>
//                         <div style={styles.qrCodeContainer}>
//                             <QRCode value={qrCode} size={256} />
//                         </div>
//                         <button onClick={closeModal} style={styles.closeButton}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: '20px',
//     },
//     heading: {
//         fontSize: '2rem',
//         color: '#333',
//         marginBottom: '20px',
//     },
//     cardContainer: {
//         display: 'grid',
//         gridTemplateColumns: '1fr',
//         gap: '20px',
//         width: '100%',
//         maxWidth: '1200px',
//     },
//     card: {
//         border: '1px solid #ddd',
//         borderRadius: '8px',
//         padding: '15px',
//         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//         backgroundColor: '#fff',
//     },
//     cardContent: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//     },
//     details: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '5px',
//         marginRight: '20px',
//     },
//     label: {
//         fontWeight: 'bold',
//         color: '#555',
//     },
//     button: {
//         padding: '10px 20px',
//         fontSize: '0.9rem',
//         color: '#fff',
//         backgroundColor: '#4CAF50',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
//     qrCodeContainer: {
//         marginTop: '20px',
//         textAlign: 'center',
//     },
//     qrCodeImage: {
//         width: '150px',
//         height: '150px',
//         marginTop: '10px',
//     },
//     // Modal styles
//     modal: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     modalContent: {
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '8px',
//         textAlign: 'center',
//         maxWidth: '500px',
//         width: '100%',
//     },
//     closeButton: {
//         marginTop: '20px',
//         padding: '10px 20px',
//         backgroundColor: '#f44336',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     }
// };

// export default BookingList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code'; 

function BookingList() {
    const [bookings, setBookings] = useState([]);
    const [qrCode, setQrCode] = useState(null);
    const [selectedTicketId, setSelectedTicketId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
        fetchUserBookings();
    }, []);

    const fetchUserBookings = async () => {
        try {
            const userId = userData.userId;
            if (!userId) {
                console.error('User ID not found in local storage.');
                return;
            }

            const token = localStorage.getItem('jwtToken');
            const response = await axios.get(
                `http://localhost:8080/api/ticketBookings/get-user-ticket-bookings/${userId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,  
                        'Content-Type': 'application/json'
                    }
                }
            );
            setBookings(response.data);
        } catch (error) {
            console.error("Error fetching bookings", error);
        }
    };

    const openModal = (ticketId) => {
        setSelectedTicketId(ticketId);
        fetchQRCode(ticketId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setQrCode(null); // Clear QR code when modal is closed
    };

    const fetchQRCode = async (ticketId) => {
        try {
            const token = localStorage.getItem('jwtToken');
            const response = await axios.get(
                `http://localhost:8080/api/qrcodes/get-qrcode-by-id/${ticketId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log(response);
            console.log(response.data.qrCode);
            setQrCode(response.data.qrCode);
        } catch (error) {
            console.error("Error fetching QR code", error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Your Bookings</h2>
            <div style={styles.cardContainer}>
                {bookings.map((booking) => (
                    <div key={booking.ticketId} style={styles.card}>
                        <div style={styles.cardContent}>
                            <div style={styles.details}>
                                <p><span style={styles.label}>Booking ID:</span> {booking.ticketId}</p>
                                <p><span style={styles.label}>Event ID:</span> {booking.placeId}</p>
                                <p><span style={styles.label}>Booking Date:</span> {booking.bookingDate}</p>
                                <p><span style={styles.label}>Total Price:</span> ₹{booking.totalPrice.toFixed(2)}</p>
                                <p><span style={styles.label}>Status:</span> {booking.status}</p>
                                <p><span style={styles.label}>Total Members:</span> {booking.totalMember}</p>
                            </div>
                            <button 
                                style={styles.button} 
                                onClick={() => openModal(booking.ticketId)}
                            >
                                Get QR Code
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for displaying QR code */}
            {isModalOpen && qrCode && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h3>QR Code for Ticket ID {selectedTicketId}</h3>
                        <div style={styles.qrCodeContainer}>
                            <QRCode value={qrCode} size={256} />
                        </div>
                        <button onClick={closeModal} style={styles.closeButton}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    },
    heading: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '20px',
    },
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '20px',
        width: '100%',
        maxWidth: '1200px',
    },
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        marginRight: '20px',
    },
    label: {
        fontWeight: 'bold',
        color: '#555',
    },
    button: {
        padding: '10px 20px',
        fontSize: '0.9rem',
        color: '#fff',
        backgroundColor: '#4CAF50',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    qrCodeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '20px',
    },
    qrCodeImage: {
        width: '150px',
        height: '150px',
        marginTop: '10px',
    },
    // Modal styles
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%',
    },
    closeButton: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

export default BookingList;
