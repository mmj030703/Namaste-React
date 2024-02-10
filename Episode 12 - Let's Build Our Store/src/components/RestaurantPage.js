import RestaurantInfoCard from './RestaurantInfoCard';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantData from '../utils/useRestaurantData';

const RestaurantPage = () => {
    const { resId: restaurantId } = useParams();

    const restaurantData = useRestaurantData(restaurantId);

    return (restaurantData !== null) ? (
        <section className="restaurant-page">
            <RestaurantInfoCard restaurantObj={restaurantData} />
        </section>
    ) : (
        <section className="restaurant-page">
            <Shimmer />
        </section>
    );
}

export default RestaurantPage;