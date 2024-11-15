/* eslint-disable no-unused-vars */
import { Button } from "@/Components/ui/button";
import { signin } from "../../services/authApi";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import CircularProgress from "@mui/material/CircularProgress"; // Adjust the import based on your CircularProgressIndicator location
// import React from "react";

// eslint-disable-next-line react/prop-types
const LoginDialog = ({onLoginSuccess}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // const handleLoginSuccess = (userData) => {
  //   onClose(false);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await signin({ email, password });
      const { jwt, status, user } = response.data;

      if (status) {
        localStorage.setItem("jwtToken", jwt);
        localStorage.setItem("userData", JSON.stringify(user));
        window.location.href="/";
      }
    } catch (err) {
      console.error("Login failed:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  function onClose(){
    navigate("/");
  }

  const {pathname} = useLocation();
  
  if(!pathname.includes("/login")){
    return null;
  }

  return (
    <Dialog  defaultOpen onOpenChange={val=>!val && onClose()}>
      <DialogContent className="max-w-md rounded-lg p-6 shadow-lg overflow-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Login to your account
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Enter your email below to login
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

          <DialogFooter className="mt-6">
            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white hover:bg-indigo-500 p-3 rounded-lg font-semibold"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" /> // Show CircularProgressIndicator
              ) : (
                "Login"
              )}
            </Button>
          </DialogFooter>
        </form>
        {/* Link to Signup page */}
        <p className="text-center mt-4">
          Not have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
