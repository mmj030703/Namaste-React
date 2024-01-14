import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

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
            const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.0759837&lng=72.8776559");

            const json = await data.json();

            const restaurants = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

            // Optional Chaining
            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        }
        catch(error) {
            console.log(error);
        }
    }; 
    
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
                            const resList = listOfRestaurants.filter((restaurantObj) => restaurantObj.info.avgRating > 4.5);
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
                        return <RestaurantCard key={restaurant.info.id} restaurantObj={restaurant} />
                    })}
                </div>
            </section>
        </main>
    )
};

export default Body;