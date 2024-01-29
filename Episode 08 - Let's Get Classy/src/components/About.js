import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
import UserCard from './UserCard';

class About extends Component {
    constructor(props) {
        super(props);

        // console.log("Parent Constructor");

        this.state = {
            userInfo: {
                name: "NAME COMES HERE",
                location: "LOCATION COMES HERE",
                imgURL: "https://www.owlguru.com/wp-content/uploads/wpallimport/files/front-end-developers/__(1).jpg"
            }
        };
    }

    async componentDidMount() {
        // console.log("Parent Mounted");
        const res = await fetch("https://api.github.com/users/mmj030703");
        const json = await res.json();

        this.setState({
            userInfo: json
        });

        this.intervalTimer = setInterval(() => {
            // console.log('setInterval');
        }, 1000);
    }

    componentDidUpdate() {
        // console.log("Component Updated.");
    }

    componentWillUnmount() {
        // console.log("Component Unmounted.");
        clearInterval(this.intervalTimer);
    }

    render() {
        // console.log("Parent Render");

        return (
            <section className="about-section">
                <h1 className='about-heading'>Owner</h1>
                {/*<User name="Mayank M Jain" location="Mumbai, Maharashta" twitterId="@mmj030703" />*/}
                {/*<UserClass name="First" location="Udaipur, Rajasthan" twitterId="@smj281001" />*/}
                {/*<UserClass name="Second" location="Udaipur, Rajasthan" twitterId="@smj281001" />*/}
                <UserCard userInfo={this.state.userInfo} />
            </section>
        );
    }
};

export default About;