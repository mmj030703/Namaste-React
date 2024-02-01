import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MenuListCard from './MenuListCard';

const RestaurantInfoCard = ({ restaurantObj }) => {
    const [restaurantData, setRestaurantData] = useState(restaurantObj);
    const [filteredRestaurantData, setFilteredRestaurantData] = useState(restaurantObj);
    const [menuListCardData, setMenuListCardData] = useState(filteredRestaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1));

    const {name, areaName, avgRating, totalRatingsString, costForTwoMessage, cuisines, sla, feeDetails} = filteredRestaurantData?.data?.cards[0]?.card?.card?.info;
    const {lastMileTravelString: distanceString, slaString: deliveryTimeString} = sla;
    const {totalFee} = feeDetails;

    return (
        <>
            <section className="restaurant-container">
                <div className="restaurant-info-container">
                    <div className="restaurant-info">
                        <div className="info-container">
                            <div className="info">
                                <h3 className="restaurant-title">{name}</h3>
                                <div className="location">
                                    <p>{cuisines.join(", ")}</p>
                                    <p>{areaName}, {distanceString}</p>
                                </div>
                            </div>
                            <div className="ratings">
                                <p className="rating-one"><i className="fa-solid fa-star"></i> {avgRating}</p>
                                <p className="rating-two">{totalRatingsString}</p>
                            </div>
                        </div>
                        {(distanceString && totalFee) ? <div className="delivery-container">
                            <p className="distance"><i className="fa-solid fa-person-biking"></i> {distanceString}</p>
                            <p className="delivery-fee">₹{(totalFee/(100))} Delivery fee will apply</p>
                        </div> : null}
                    </div>
                    <div className="other-info">
                        <p className="delivery-time"><i className="fa-solid fa-clock"></i> {deliveryTimeString}</p>
                        <p className="price-for-two"><i className="fa-solid fa-indian-rupee-sign"></i> {costForTwoMessage}</p>
                    </div>
                </div>
            </section>
            <section className="menu-container">
                <div className="menu-list-container">
                    {menuListCardData.filter(menuListCardObj => menuListCardObj?.card?.card?.itemCards).map(menuListCardObj => {
                        const keyVal = uuidv4();
                        return <MenuListCard key={keyVal} cardKey={keyVal} menuListData={menuListCardObj} />
                    })}
                </div>
            </section>
        </>
    );
};

export default RestaurantInfoCard;