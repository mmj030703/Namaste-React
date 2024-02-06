import RestaurantCard, {withHighRatedLabel} from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import {Link} from '../../node_modules/react-router-dom';
import Shimmer from './Shimmer';
import { RESTAURANTS_DATA_API_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInputText, setSearchInputText] = useState("");
    const {loggedInUsername, setUsername} = useContext(UserContext);

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
    
    const RestaurantCardWithHighRatedLabel = withHighRatedLabel(RestaurantCard);

    return (
        <main>
            <section className='body p-4'>
                <div className='search-container'>
                    <input type='text' className='text-[1rem] border border-solid border-black pr-2 pl-3 py-[6px] w-[330px] rounded-full mt-2 placeholder:text-gray-400' placeholder='Search Restaurant' value={searchInputText} 
                        onChange={(e) => {
                            setSearchInputText(e.target.value);
                            const filteredRestaurants = listOfRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()));
                            (e.target.value !== '')? setFilteredRestaurants(filteredRestaurants) : setFilteredRestaurants(listOfRestaurants);
                        }}
                    />
                </div>
                <div className='filter-container my-4 flex gap-x-4'>
                    <button 
                        className='bg-zinc-200 hover:bg-zinc-300 rounded-[4px] cursor-pointer px-6 py-3' 
                        onClick={() => {
                            const resList = listOfRestaurants.filter((restaurantObj) => restaurantObj.info.avgRating > 4.4);
                            setFilteredRestaurants(resList);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                    <button className='bg-zinc-200 hover:bg-zinc-300 rounded-[4px] cursor-pointer px-6 py-3' 
                        onClick={() => {
                            setFilteredRestaurants(listOfRestaurants);
                        }}
                    >
                        Show All Restaurant
                    </button>
                    <input 
                        type='text' 
                        className='outline outline-black border pl-1'
                        value={loggedInUsername}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className='restaurant-container flex flex-wrap gap-x-5 gap-y-5'>
                    {filteredRestaurants.map(restaurant => {
                        return (
                            <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                                {restaurant.info.avgRating > 4.4 ? <RestaurantCardWithHighRatedLabel restaurantObj={restaurant} /> : <RestaurantCard restaurantObj={restaurant} />}
                            </Link>
                        )
                    })}
                </div>
            </section>
        </main>
    )
};

export default Body;