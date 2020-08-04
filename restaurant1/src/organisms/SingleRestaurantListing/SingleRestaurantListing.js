import React from "react";
import Text from "../../atoms/Text/Text";
import RestaurantImage from "../../molecules/RestaurantImage/RestaurantImage";
import "./styles.css";

const SingleRestaurantListing = ({
  newRestaurant,
  ad,
  preOrder,
  deliveryDuration,
  restaurantName,
  restaurantDescription,
  image,
  closed
}) => {
  const rightLabels = [];
  const leftLabels = [];
  if (ad) rightLabels.push("Ad");
  if (newRestaurant) rightLabels.push("New");
  if (preOrder) leftLabels.push("Pre-Order");
  return (
    <div className="single-restaurant-listing padder">
      <RestaurantImage
        closed={closed}
        image={image}
        deliveryDuration={deliveryDuration}
        rightLabels={rightLabels}
        leftLabels={leftLabels}
      />
      <Text text={restaurantName} type="subheading" gutterBottom />
      <Text text={restaurantDescription} type="paragraph" />
    </div>
  );
};

export default SingleRestaurantListing;
