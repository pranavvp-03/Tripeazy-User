import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Country, State, City } from "country-state-city";

export default function SearchBar() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [travelers, setTravelers] = useState(1);
  const [showDropdowns, setShowDropdowns] = useState({
    location: false,
    date: false,
    travelers: false,
  });

  const [startDate, endDate] = dateRange;

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const result = State.getStatesOfCountry(selectedCountry.isoCode);
      setStates(result);
      setSelectedState(null);
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      const result = City.getCitiesOfState(
        selectedCountry.isoCode,
        selectedState.isoCode
      );
      setCities(result);
    }
  }, [selectedState]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (startDate) params.append("startDate", startDate.toISOString());
    if (endDate) params.append("endDate", endDate?.toISOString() || "");
    params.append("travelers", travelers.toString());
    navigate(`/packages?${params.toString()}`);
  };

  const formatDate = (date) =>
    date?.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="flex items-center justify-between gap-6 py-4 bg-white shadow-lg rounded-full w-[90%] max-w-[1000px] mx-auto px-8 relative">

      {/* LOCATION FIELD */}
      <div className="relative min-w-[200px]">
        <div
          onClick={() =>
            setShowDropdowns({
              location: !showDropdowns.location,
              date: false,
              travelers: false,
            })
          }
          className="flex flex-col items-center text-center gap-1 cursor-pointer"
        >
          <FaMapMarkerAlt className="text-red-500 text-2xl" />
          <span className="text-red-500 font-semibold text-base">Location</span>
          <span className="text-black text-sm truncate w-full">
            {location || "Choose City"}
          </span>
        </div>

        {showDropdowns.location && (
          <div className="absolute bottom-full mb-4 w-[280px] bg-white shadow-2xl border rounded-xl z-20 p-4 space-y-3 transition-all duration-300 ease-in-out">
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              onChange={(e) => {
                const country = countries.find((c) => c.isoCode === e.target.value);
                setSelectedCountry(country);
              }}
              defaultValue=""
            >
              <option value="" disabled>Select Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
              ))}
            </select>

            {states.length > 0 && (
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                onChange={(e) => {
                  const state = states.find((s) => s.isoCode === e.target.value);
                  setSelectedState(state);
                }}
                defaultValue=""
              >
                <option value="" disabled>Select State</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                ))}
              </select>
            )}

            {cities.length > 0 && (
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                onChange={(e) => {
                  setLocation(e.target.value);
                  setShowDropdowns((prev) => ({ ...prev, location: false }));
                }}
                defaultValue=""
              >
                <option value="" disabled>Select City</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>{city.name}</option>
                ))}
              </select>
            )}
          </div>
        )}
      </div>

      <div className="h-16 w-px bg-gray-300"></div>

      {/* DATE FIELD */}
      <div className="relative min-w-[200px]">
        <div
          onClick={() =>
            setShowDropdowns({
              date: !showDropdowns.date,
              location: false,
              travelers: false,
            })
          }
          className="flex flex-col items-center text-center gap-1 cursor-pointer"
        >
          <FaCalendarAlt className="text-red-500 text-2xl" />
          <span className="text-red-500 font-semibold text-base">Add Date</span>
          <span className="text-black text-sm">
            {startDate
              ? `${formatDate(startDate)} - ${formatDate(endDate)}`
              : "Select Dates"}
          </span>
        </div>

        {showDropdowns.date && (
          <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-lg p-4">
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              monthsShown={2}
              minDate={new Date()}
              isClearable
              inline
            />
          </div>
        )}
      </div>

      <div className="h-16 w-px bg-gray-300"></div>

      {/* TRAVELERS FIELD */}
      <div className="relative min-w-[150px]">
        <div
          onClick={() =>
            setShowDropdowns({
              travelers: !showDropdowns.travelers,
              location: false,
              date: false,
            })
          }
          className="flex flex-col items-center text-center gap-1 cursor-pointer"
        >
          <FaUser className="text-red-500 text-2xl" />
          <span className="text-red-500 font-semibold text-base">Guests</span>
          <span className="text-black text-sm">{travelers} Traveler(s)</span>
        </div>

        {showDropdowns.travelers && (
          <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
            <div className="flex justify-between items-center">
              <button
                onClick={() => travelers > 1 && setTravelers(travelers - 1)}
                className="w-8 h-8 bg-gray-200 rounded-full"
              >
                -
              </button>
              <span>{travelers}</span>
              <button
                onClick={() => setTravelers(travelers + 1)}
                className="w-8 h-8 bg-gray-200 rounded-full"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="h-16 w-px bg-gray-300"></div>

      {/* SEARCH BUTTON */}
      <Button
        className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-8 rounded-full"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
}
