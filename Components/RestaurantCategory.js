const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>
        <span>{data.title}</span>
        <span>⬇️</span>
      </div>
    </div>
  );
};
export default RestaurantCategory;
