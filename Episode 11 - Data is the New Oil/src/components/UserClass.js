import React from "react";
import UserChild from './UserChild'; 

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        console.log(this.props.name + "Child Constructor");
    }

    componentDidMount() {
        console.log(this.props.name + "Child Mounted");
    }

    render() {
        const { name, location, twitterId } = this.props;
        const { count } = this.state;

        console.log(this.props.name + "Child Render");

        return (

            <div className="user-card">
                <h1>Class Based</h1>
                <h2 className="user-name">Name: {name}</h2>
                <h4 className="user-location">Location: {location}</h4>
                <h4 className="user-twitter-id">Twitter Id: {twitterId}</h4>
                <h4>Count: {count}</h4>
                <button
                    onClick={() => {
                        this.setState({
                            count: count + 1
                        });
                    }}
                >
                    Increase Count
                </button>
                <UserChild name="First" />
                <UserChild name="Second" />
            </div>
        );
    }
}

export default UserClass;