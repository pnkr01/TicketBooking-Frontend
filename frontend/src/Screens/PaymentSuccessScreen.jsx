    import { useEffect, useState } from "react";
    import { useLocation, useNavigate } from "react-router-dom";
    import axios from "axios";

    const PaymentSuccessPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [qrCode, setQrCode] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const paymentId = params.get("paymentId");
        // const status = params.get("status");

        // if (status === "success" && paymentId) {
        // Hit the API to create a QR code for this booking
        axios.post(
            `http://localhost:8080/api/qrcodes/create-qr-code/${paymentId}`,
            {},
            {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
            }
        ).then(response => {
            console.log("response wr",response);
            
            setQrCode(response.data.qrCodeUrl); // Assuming qrCodeUrl is returned
            navigate("/booking");
        }).catch(error => {
            console.error("Error generating QR code:", error);
            setError("Failed to generate QR code");
        });
        // } else {
        //   setError("Payment failed or invalid payment ID");
        //   navigate("/payment-failure");
        // }
    }, [location, navigate]);

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg m-10 border border-gray-300">
        <h1 className="text-2xl font-bold mb-4">Payment Status</h1>

        {error ? (
            <div className="text-red-600">{error}</div>
        ) : (
            <div>
            <h2 className="text-xl font-semibold mb-4">Payment Successful!</h2>
            {qrCode && (
                <div>
                <img src={qrCode} alt="QR Code" className="w-48 h-48" />
                <p>Your QR Code for booking will appear here.</p>
                </div>
            )}
            </div>
        )}
        </div>
    );
    };

    export default PaymentSuccessPage;
