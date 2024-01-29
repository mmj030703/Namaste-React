import { useState } from "react";

const User = ({ name, location, twitterId }) => {
    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h1>Function Based</h1>
            <h2 className="user-name">Name: {name}</h2>
            <h4 className="user-location">Location: {location}</h4>
            <h4 className="user-twitter-id">Twitter Id: {twitterId}</h4>
            <h4>Count: {count}</h4>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increase Count
            </button>
        </div>
    );
};

export default User;