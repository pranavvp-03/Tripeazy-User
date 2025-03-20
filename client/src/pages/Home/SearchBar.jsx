import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-between gap-6 py-4 bg-white shadow-lg rounded-full w-[80%] max-w-[900px] mx-auto px-8">
      {/* Location Field */}
      <div className="flex flex-col items-center text-center gap-1">
        <FaMapMarkerAlt className="text-red-500 text-2xl" />
        <span className="text-red-500 font-semibold text-base">Location</span>
        <span className="text-black text-sm">Search your destination</span>
      </div>

      <div className="h-16 w-px bg-gray-300"></div>

      {/* Date Field */}
      <div className="flex flex-col items-center text-center gap-1">
        <FaCalendarAlt className="text-red-500 text-2xl" />
        <span className="text-red-500 font-semibold text-base">Add Date</span>
        <span className="text-black text-sm">Check In</span>
      </div>

      <div className="h-16 w-px bg-gray-300"></div>

      {/* Guests Field */}
      <div className="flex flex-col items-center text-center gap-1">
        <FaUser className="text-red-500 text-2xl" />
        <span className="text-red-500 font-semibold text-base">Add Guests</span>
        <span className="text-black text-sm">Travelers</span>
      </div>

      <div className="h-16 w-px bg-gray-300"></div>

      {/* Search Button */}
      <Button className="bg-green-500 text-white text-lg px-8 py-8 rounded-full">
        Search
      </Button>
    </div>
  );
}
