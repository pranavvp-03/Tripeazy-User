const PackageCard = ({ data }) => {
    return (
      <div className="border rounded-lg shadow-lg p-4 w-72">
        <img
          src={data.images?.[0] || 'https://via.placeholder.com/300x200'}
          alt={data.destination}
          className="w-full h-40 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold mt-2">{data.destination}</h3>
        <p className="text-gray-600">Duration: {data.minor} hours</p>
        <p className="text-green-600 font-bold">
          {data.currency} {data.payment} per person
        </p>
        <p className="text-gray-500">{data.packageDescription}</p>
      </div>
    );
  };
  
  export default PackageCard;
  