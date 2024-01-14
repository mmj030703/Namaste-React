import { RESTAURANT_CARD_IMAGE_BASE_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = props.restaurantObj.info;
    const {deliveryTime} = sla;
    return (
        <div className='restaurant-card'>
            <img alt='Restaurant Image' className='restaurant-image' src={RESTAURANT_CARD_IMAGE_BASE_URL + cloudinaryImageId} />
            <h3 className='restaurant-name'>{name}</h3>
            <p className='cuisines'>{cuisines.join(', ')}</p>
            <p className='rating'>{avgRating} Stars</p>
            <p className='delivery-time'>{deliveryTime}min</p>
        </div>
    )
};

export default RestaurantCard;