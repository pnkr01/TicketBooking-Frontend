// const PlaceLocation = () => {
//     return (
//       <div className="bg-gray-50 p-4 rounded-lg shadow">
//         <h3 className="font-semibold text-lg">Ahmedabad</h3>
//         <p className="text-gray-600 mt-2">Pandit Dindayal Upadhyay Auditorium : Ahmedabad</p>
//         <p className="text-gray-600">1, Rajpath Club Road, Vikram Nagar, Ahmedabad, Gujarat 380059, India</p>
//         <div className="bg-gray-300 mt-4 h-32 rounded flex items-center justify-center">
//           <span className="text-gray-500">Map Placeholder</span>
//         </div>
//       </div>
//     );
//   };
  
//   export default PlaceLocation;
import { FaMapMarkerAlt } from "react-icons/fa";

const PlaceLocation = ({ location }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg">{location?.city || "City Name"}</h3>
      <p className="text-gray-600 mt-2">{location?.description || "Venue Description"}</p>
      <div className="bg-gray-300 mt-4 h-32 rounded flex items-center justify-center">
        <FaMapMarkerAlt className="text-gray-500" size={24} />
        <span className="text-gray-500 ml-2">Map Placeholder</span>
      </div>
    </div>
  );
};

export default PlaceLocation;
