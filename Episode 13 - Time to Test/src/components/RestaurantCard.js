import { RESTAURANT_CARD_IMAGE_BASE_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = props.restaurantObj.info;
    const { deliveryTime } = sla;
    return (
        <div data-testid="restaurantCard" className='restaurant-card bg-gray-200 h-full w-[240px] p-2 rounded-lg relative hover:outline hover:outline-1 hover:outline-slate-500'>
            <img alt='Restaurant Image' className='restaurant-image w-full h-36 object-cover rounded-lg' src={RESTAURANT_CARD_IMAGE_BASE_URL + cloudinaryImageId} />
            <h3 className='restaurant-name font-bold text-lg py-2' title={name}>{name.length <= 20 ? name : name.substring(0, 20) + "..."}</h3>
            <p className='cuisines pt-1' title={cuisines.join(', ')}>{cuisines.length <= 3 ? cuisines.join(', ') : cuisines.slice(0, 3).join(', ') + "..."}</p>
            <p className='rating pt-1'>{avgRating} Stars</p>
            <p className='delivery-time pt-1'>{deliveryTime}min</p>
        </div>
    )
};

//* Higher Order Component 
export const withHighRatedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className='h-full'>
                <div className='relative'>
                    <label className='bg-black text-white text-base px-2 py-1 absolute -left-3 z-10'>High Rated</label>
                    <span className=' bg-gray-600 w-5 h-3 absolute -left-[10px] top-[27px] rotate-[35deg]'></span>
                </div>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;