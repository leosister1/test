import { useNavigate } from "react-router-dom";

const Place = ({ _id, placeName, desc, image }) => {
  const navigate = useNavigate();

  return (
    <div
      className="place-container grid grid-cols-5 h-1/5 rounded-lg py-3 hover:cursor-pointer"
      onClick={() => navigate(`/place/${_id}`)}
    >
      
    </div>
  );
};

export default Place;