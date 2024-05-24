import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#D3D3D3",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("working");
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    sla,
  } = resData?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
