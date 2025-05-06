import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchBar() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [travelers, setTravelers] = useState(1);
  const [showTravelersSelector, setShowTravelersSelector] = useState(false);

  const [startDate, endDate] = dateRange;

  const locations = [
    "Paris, France",
    "Tokyo, Japan",
    "New York, USA",
    "Rome, Italy",
    "Bali, Indonesia",
    "Sydney, Australia",
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (startDate) params.append("startDate", startDate.toISOString());
    if (endDate) params.append("endDate", endDate?.toISOString() || "");
    params.append("travelers", travelers.toString());

    navigate(`/packages?${params.toString()}`);
  };

  const formatDateDisplay = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="flex items-center justify-between gap-6 py-4 bg-white shadow-lg rounded-full w-[80%] max-w-[900px] mx-auto px-8 relative">
      {/* Location Field */}
      <div 
        className="flex flex-col items-center text-center gap-1 cursor-pointer relative min-w-[150px]"
        onClick={() => {
          setShowLocationDropdown(!showLocationDropdown);
          setShowDatePicker(false);
          setShowTravelersSelector(false);
        }}
      >
        <FaMapMarkerAlt className="text-red-500 text-2xl" />
        <span className="text-red-500 font-semibold text-base">Location</span>
        <span className="text-black text-sm truncate w-full">
          {location || "Search your destination"}
        </span>
        
        {showLocationDropdown && (
          <div className="absolute bottom-full mb-2 w-64 bg-white shadow-lg rounded-lg z-10 max-h-60 overflow-y-auto">
            {locations.map((loc) => (
              <div
                key={loc}
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setLocation(loc);
                  setShowLocationDropdown(false);
                }}
              >
                {loc}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-16 w-px bg-gray-300"></div>

      {/* Date Field */}
      <div 
        className="flex flex-col items-center text-center gap-1 cursor-pointer relative min-w-[180px]"
        onClick={() => {
          setShowDatePicker(!showDatePicker);
          setShowLocationDropdown(false);
          setShowTravelersSelector(false);
        }}
      >
        <FaCalendarAlt className="text-red-500 text-2xl" />
        <span className="text-red-500 font-semibold text-base">Add Date</span>
        <span className="text-black text-sm truncate w-full">
          {startDate 
            ? `${formatDateDisplay(startDate)}${endDate ? ` - ${formatDateDisplay(endDate)}` : ''}` 
            : "Check In"}
        </span>
        
        {showDatePicker && (
          <div className="absolute bottom-full mb-2 z-10 bg-white p-4 shadow-lg rounded-lg">
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
                setShowDatePicker(false);
              }}
              isClearable
              monthsShown={2}
              minDate={new Date()}
              inline
            />
          </div>
        )}
      </div>

      <div className="h-16 w-px bg-gray-300"></div>

      {/* Guests Field */}
      <div 
        className="flex flex-col items-center text-center gap-1 cursor-pointer relative min-w-[120px]"
        onClick={() => {
          setShowTravelersSelector(!showTravelersSelector);
          setShowLocationDropdown(false);
          setShowDatePicker(false);
        }}
      >
        <FaUser className="text-red-500 text-2xl" />
        <span className="text-red-500 font-semibold text-base">Add Guests</span>
        <span className="text-black text-sm">
          {travelers} {travelers === 1 ? "Traveler" : "Travelers"}
        </span>
        
        {showTravelersSelector && (
          <div className="absolute bottom-full mb-2 w-48 bg-white shadow-lg rounded-lg z-10 p-4">
            <div className="flex justify-between items-center mb-2">
              <span>Travelers:</span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (travelers > 1) setTravelers(travelers - 1);
                  }}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  -
                </button>
                <span>{travelers}</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setTravelers(travelers + 1);
                  }}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            <button 
              className="w-full mt-2 bg-red-500 text-white py-1 rounded hover:bg-red-600 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowTravelersSelector(false);
              }}
            >
              Done
            </button>
          </div>
        )}
      </div>

      <div className="h-16 w-px bg-gray-300"></div>

      {/* Search Button */}
      <Button 
        className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-8 rounded-full transition-colors"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
}