import { useState, useEffect } from 'react';
import { RESTAURANT_DATA_API_URL } from '../utils/constants';

const useRestaurantData = (resId) => {
    const [restaurantData, setRestaurantData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_DATA_API_URL + resId);
        const json = await data.json();

        setRestaurantData(json);
    };

    return restaurantData;
};

export default useRestaurantData;