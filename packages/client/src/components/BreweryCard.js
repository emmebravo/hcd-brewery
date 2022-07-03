import { Link } from 'react-router-dom';

const BreweryCard = ({ name, type, address, website, latitude, longitude }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Type: {type}</p>
      <p>Address: {address}</p>
      <Link>{website}</Link>
      {/* <a herf='#'>
        <BreweryExpand latitude={latitude} longitude={longitude} />
      </a> */}
    </div>
  );
};

export default BreweryCard;
