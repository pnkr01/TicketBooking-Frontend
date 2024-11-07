import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoginDialog from "../auth/LoginDialog";
import { Link } from "react-router-dom";
import LocationSelector from "./LocationSelector";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleLoginOpen = () => setLoginDialogOpen(true);
  const handleLoginClose = () => setLoginDialogOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userData");
    setUser(null);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setLoginDialogOpen(false);
  };

  // eslint-disable-next-line no-unused-vars
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`); // Redirect to the search page
    }
  };

  const [isLocationSelectorOpen, setLocationSelectorOpen] = useState(false);
  const handleLocationSelectorOpen = () => setLocationSelectorOpen(true);
  const handleLocationSelectorClose = () => setLocationSelectorOpen(false);

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-neutral-50 shadow-sm">
    {/* Logo */}
    <div className="basis-2/3 flex justify-start items-center space-x-8">
        <Link>
          <div className="text-lg font-semibold">bookMyTicket</div>
        </Link>
        <div className="flex-grow mx-4 max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
        </div>
        </div>
      {/* Location Selector and User Menu */}
      <div className="flex items-center space-x-4">
        {/* Location Selector */}
        <button className="font-medium bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg"
          onClick={handleLocationSelectorOpen}>
          Select Location
        </button>

        {/* Login / User Menu */}
        {user ? (
          <DropdownMenu className="outline-none">
            <DropdownMenuTrigger>
              <div className="w-8 h-8 rounded-full bg-neutral-300 flex items-center justify-center">
                <span className="text-sm font-medium text-neutral-700">
                  <FaUser />
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="m-2">
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link to="/register-as-owner">Become Place Owner</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/bookings">Your Bookings</Link></DropdownMenuItem>
              <DropdownMenuItem>Account & Settings</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <button
            className="font-medium bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg"
            onClick={handleLoginOpen}
          >
            Login
          </button>
        )}
          </div>
      <LoginDialog
        open={isLoginDialogOpen}
        onClose={handleLoginClose}
        onLoginSuccess={handleLoginSuccess}
      />
      <LocationSelector open={isLocationSelectorOpen} onClose={handleLocationSelectorClose} />
    </div>
  );
}