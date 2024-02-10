import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MenuListCard from './MenuListCard';

const RestaurantInfoCard = ({ restaurantObj }) => {
    const [restaurantData, setRestaurantData] = useState(restaurantObj);
    const [filteredRestaurantData, setFilteredRestaurantData] = useState(restaurantObj);
    const [menuListCardData, setMenuListCardData] = useState(filteredRestaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    const [showMenuItems, setShowMenuItems] = useState(true);
    const [showMenuItemsWithIndex, setShowMenuItemsWithIndex] = useState(0);

    const {name, areaName, avgRating, totalRatingsString, costForTwoMessage, cuisines, sla, feeDetails} = filteredRestaurantData?.data?.cards[0]?.card?.card?.info;
    const {lastMileTravelString: distanceString, slaString: deliveryTimeString} = sla;
    const {totalFee} = feeDetails;

    return (
        <>
            <section className="restaurant-container max-w-[800px] m-auto">
                <div className="restaurant-info-container">
                    <div className="restaurant-info border-b-[1px] border-dashed border-slate-300 pb-4">
                        <div className="info-container flex justify-between mt-6">
                            <div className="info">
                                <h3 className="restaurant-title text-[20px] font-bold text-slate-700">{name}</h3>
                                <div className="location text-[13px] text-slate-500">
                                    <p>{cuisines.join(", ")}</p>
                                    <p>{areaName}, {distanceString}</p>
                                </div>
                            </div>
                            <div className="ratings border border-solid border-slate-300 px-1 text-center rounded-lg flex flex-col justify-center w-fit">
                                <p className="rating-one text-[14px] font-bold text-green-600 border-b-[1px] pb-2 border-slate-300"><i className="fa-solid fa-star"></i> {avgRating}</p>
                                <p className="rating-two text-[10px] font-bold pt-2 tracking-tighter">{totalRatingsString}</p>
                            </div>
                        </div>
                        {(distanceString && totalFee) ? <div className="delivery-container flex gap-x-2 text-sm text-slate-500 mt-4">
                            <p className="distance"><i className="fa-solid fa-person-biking"></i> {distanceString}</p>
                            <p className="delivery-fee">₹{(totalFee/(100))} Delivery fee will apply</p>
                        </div> : null}
                    </div>
                    <div className="other-info mt-3 flex gap-x-5 text-[16px] font-bold text-slate-800">
                        <p className="delivery-time"><i className="fa-solid fa-clock"></i> {deliveryTimeString}</p>
                        <p className="price-for-two"><i className="fa-solid fa-indian-rupee-sign"></i> {costForTwoMessage.substring(0,1) === '₹' ? costForTwoMessage.substring(1) : costForTwoMessage}</p>
                    </div>
                </div>
            </section>
            <section className="menu-container max-w-[800px] m-auto">
                <div className="menu-list-container mt-14">
                    {menuListCardData.map((menuListCardObj, index) => {
                        const keyVal = uuidv4();
                        return (
                            <MenuListCard 
                                key={keyVal} 
                                cardKey={keyVal} 
                                menuListData={menuListCardObj} 
                                showMenuItems={index === showMenuItemsWithIndex ? true : false} 
                                setShowMenuItemsWithIndex={() => setShowMenuItemsWithIndex(index)} 
                            />
                        )
                    })}
                </div>
            </section>
        </>
    );
};

export default RestaurantInfoCard;