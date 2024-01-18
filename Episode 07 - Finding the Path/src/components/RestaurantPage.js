import { useState, useEffect } from 'react';
import RestaurantInfoCard from './RestaurantInfoCard';
import { RESTAURANT_DATA_API_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';

const RestaurantPage = () => {
    const [restaurantData, setRestaurantData] = useState(null);
    const { resId: restaurantId } = useParams();

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    const fetchRestaurantData = async () => {
        const response = await fetch(RESTAURANT_DATA_API_URL + restaurantId);
        const json = await response.json();

        setRestaurantData(json);
    };

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