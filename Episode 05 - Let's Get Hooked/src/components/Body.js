import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import restaurantList from '../utils/mockData';


const Body = () => {
    //* React Hooks => They are normal functions at the end of the day. There are many Hooks for different purpose in React. 
    //* It gives us that power to create that state variable.
    
    // Local State Variable (very super powerfull variable)
    //& Way 1 to use useState
    /*
    const stateArray = useState(restaurantList);
    let listOfRestaurants = stateArray[0];
    let setListOfRestaurants = stateArray[1];
    */

    //& Way 2 to use useState (used array destructuring on the fly to extract values from array returned by useState())
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    
    // Normal JS Variable
    // let listOfRestaurants = restaurantList;

    return (
        <main>
            <section className='body'>
                <div className='search-container'>
                    <input type='text' className='search' placeholder='Search Restaurant' style={{ fontSize: ".95rem" }} 
                        onChange={() => {
                            const input = document.querySelector('.search');
                            const updatedList = restaurantList.filter(restaurant => {
                                if(restaurant.info.name.toLowerCase().trim().includes(input.value.toLowerCase().trim())) {
                                    return restaurant;
                                }
                            });  
                            if(input.value === '') setListOfRestaurants(restaurantList);
                            else setListOfRestaurants(updatedList);
                        }}
                    />
                </div>
                <div className='filter-container'>
                    <button 
                        className='top-rated-btn' 
                        onClick={() => {
                            const resList = listOfRestaurants.filter((restaurantObj) => restaurantObj.info.avgRating > 4.5);
                            //& Updating value of listOfRestaurants;
                            setListOfRestaurants(resList);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                    <button className='show-all-btn' 
                        onClick={() => {
                            setListOfRestaurants(restaurantList);
                        }}
                    >
                        Show All Restaurant
                    </button>
                </div>
                <div className='restaurant-container'>
                    {listOfRestaurants.map(restaurant => {
                        return <RestaurantCard key={restaurant.info.id} restaurantObj={restaurant} />
                    })}
                </div>
            </section>
        </main>
    )
};

export default Body;