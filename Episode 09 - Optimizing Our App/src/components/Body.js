import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import {Link} from '../../node_modules/react-router-dom';
import Shimmer from './Shimmer';
import { RESTAURANTS_DATA_API_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInputText, setSearchInputText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        try {
            // Fetching data of restaurants from External API of Swiggy
            // Open the dev tools in browser then only swiggy api is responding 
            const data = await fetch(RESTAURANTS_DATA_API_URL);

            const json = await data.json();

            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            // Optional Chaining
            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        }
        catch(error) {
            console.log(error);
        }
    }; 
    
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return <h1>No Internet Connection!</h1>;
    }
    
    if(listOfRestaurants.length === 0) {
        return (
            <section className="body">
                <Shimmer />
            </section>
        );
    }
    
    return (
        <main>
            <section className='body'>
                <div className='search-container'>
                    <input type='text' className='search' placeholder='Search Restaurant' style={{ fontSize: ".95rem" }} value={searchInputText} 
                        onChange={(e) => {
                            setSearchInputText(e.target.value);
                            const filteredRestaurants = listOfRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()));
                            (e.target.value !== '')? setFilteredRestaurants(filteredRestaurants) : setFilteredRestaurants(listOfRestaurants);
                        }}
                    />
                </div>
                <div className='filter-container'>
                    <button 
                        className='top-rated-btn' 
                        onClick={() => {
                            const resList = listOfRestaurants.filter((restaurantObj) => restaurantObj.info.avgRating > 4.3);
                            setFilteredRestaurants(resList);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                    <button className='show-all-btn' 
                        onClick={() => {
                            setFilteredRestaurants(listOfRestaurants);
                        }}
                    >
                        Show All Restaurant
                    </button>
                </div>
                <div className='restaurant-container'>
                    {filteredRestaurants.map(restaurant => {
                        return <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard restaurantObj={restaurant} /></Link>
                    })}
                </div>
            </section>
        </main>
    )
};

export default Body;