import BreweryCard from './BreweryCard';

const BreweryList = ({ brewery }) => {
  console.log(brewery);
  const {
    name,
    brewery_type,
    street,
    city,
    state,
    postal_code,
    website_url,
    latitude,
    longitude,
  } = brewery;

  /*
 
  Name
  Type
  Address
  Website --> if available, open in new tab
  
  --When details clicked, open new component
  Brewery Name
  Address
  Map (google map react)
  Go back to List

  */

  return (
    <div>
      <BreweryCard
        name={name}
        type={brewery_type}
        address={`${street ? street : ''} ${city}, ${state}, ${postal_code}`}
        website={website_url}
        latitude={latitude}
        longitude={longitude}
      />
    </div>
  );
};

export default BreweryList;
