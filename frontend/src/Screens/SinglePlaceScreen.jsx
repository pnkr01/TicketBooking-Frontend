// // // // eslint-disable-next-line no-unused-vars
// // // import React from "react";
// // // import PlaceBanner from "@/CustomComponents/singlePlace/PlaceBanner";
// // // import ShareComponent from "@/CustomComponents/singlePlace/ShareComponent";
// // // import PlaceDescription from "@/CustomComponents/singlePlace/PlaceDescription";
// // // import PlaceLocation from "@/CustomComponents/singlePlace/PlaceLocation";

// // // const SinglePlaceScreen = () => {
// // //   return (
// // //     <div className="bg-gray-100 min-h-screen max-w-5xl mx-auto p-4 md:p-8">
// // //       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
// // //         <PlaceBanner />
// // //       </div>
// // //       <div>
// // //         <div className="grid grid-cols-4 gap-6 mt-6">
// // //           <ShareComponent />
// // //           <div className="col-span-2">
// // //             <PlaceDescription />
// // //           </div>
// // //           <div className="col-span-1">
// // //             <PlaceLocation />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SinglePlaceScreen;


// // // eslint-disable-next-line no-unused-vars
// // import React from "react";
// // import PlaceBanner from "@/CustomComponents/singlePlace/PlaceBanner";
// // import ShareComponent from "@/CustomComponents/singlePlace/ShareComponent";
// // import PlaceDescription from "@/CustomComponents/singlePlace/PlaceDescription";
// // import PlaceLocation from "@/CustomComponents/singlePlace/PlaceLocation";

// // const SinglePlaceScreen = ({ eventData }) => {
// //   return (
// //     <div className="bg-gray-100 min-h-screen max-w-5xl mx-auto p-4 md:p-8">
// //       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
// //         <PlaceBanner eventData={eventData} />
// //       </div>
// //       <div>
// //         <div className="grid grid-cols-4 gap-6 mt-6">
// //           <ShareComponent />
// //           <div className="col-span-2">
// //             <PlaceDescription description={eventData.description || "Join us for an unforgettable experience!"} />
// //           </div>
// //           <div className="col-span-1">
// //             <PlaceLocation location={eventData.location} />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SinglePlaceScreen;
// import React from "react";
// import PlaceBanner from "@/CustomComponents/singlePlace/PlaceBanner";
// import ShareComponent from "@/CustomComponents/singlePlace/ShareComponent";
// import PlaceDescription from "@/CustomComponents/singlePlace/PlaceDescription";
// import PlaceLocation from "@/CustomComponents/singlePlace/PlaceLocation";

// const SinglePlaceScreen = ({ eventData = {} }) => {
//   return (
//     <div className="bg-gray-100 min-h-screen max-w-5xl mx-auto p-4 md:p-8">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <PlaceBanner eventData={eventData} />
//       </div>
//       <div>
//         <div className="grid grid-cols-4 gap-6 mt-6">
//           <ShareComponent />
//           <div className="col-span-2">
//             <PlaceDescription description={eventData.description || "Join us for an unforgettable experience!"} />
//           </div>
//           <div className="col-span-1">
//             <PlaceLocation location={eventData.location || {}} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SinglePlaceScreen;
import React from "react";
import { useLocation } from "react-router-dom";
import PlaceBanner from "@/CustomComponents/singlePlace/PlaceBanner";
import ShareComponent from "@/CustomComponents/singlePlace/ShareComponent";
import PlaceDescription from "@/CustomComponents/singlePlace/PlaceDescription";
import PlaceLocation from "@/CustomComponents/singlePlace/PlaceLocation";

const SinglePlaceScreen = () => {
  const location = useLocation();
  const eventData = location.state?.eventData || {}; // Default to an empty object if no data is passed

  console.log(eventData);
  
  return (
    <div className="bg-gray-100 min-h-screen max-w-5xl mx-auto p-4 md:p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <PlaceBanner eventData={eventData} />
      </div>
      <div>
        <div className="grid grid-cols-4 gap-6 mt-6">
          <ShareComponent />
          <div className="col-span-2">
            <PlaceDescription description={eventData.description || "Join us for an unforgettable experience!"} />
          </div>
          <div className="col-span-1">
            <PlaceLocation location={eventData.location || {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlaceScreen;
