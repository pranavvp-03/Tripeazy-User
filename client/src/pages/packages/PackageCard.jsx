const PackageCard = ({ pkg }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-bold mb-2">{pkg.destination}</h2>
        <p>{pkg.packageDescription}</p>
        <p><strong>Starting From:</strong> {pkg.startingDestination}</p>
        <p><strong>Adults:</strong> {pkg.adult} | <strong>Minors:</strong> {pkg.minor}</p>
        <p><strong>Payment:</strong> {pkg.currency} {pkg.payment}</p>
  
        {/* Display Images */}
        {pkg.images?.length > 0 ? (
          <div className="flex space-x-2 mt-4">
            {pkg.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Package ${pkg.destination} - ${index + 1}`} 
                className="w-32 h-32 object-cover rounded-lg"
              />
            ))}
          </div>
        ) : (
          <p>No images available</p>
        )}
      </div>
    );
  };
  
  export default PackageCard;
  