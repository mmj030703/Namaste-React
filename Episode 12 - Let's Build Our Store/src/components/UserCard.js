import { Component } from 'react';
import UserContext from '../utils/UserContext';

class UserCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, location, avatar_url } = this.props.userInfo;
        return (
            <div className='user-card'>
                <img src={avatar_url} className='user-img' />
                {/* Consuming the Context Data*/}
                <UserContext.Consumer>
                    {({ loggedInUsername }) => <h1>Username : <strong>{loggedInUsername}</strong></h1>}
                </UserContext.Consumer>
                <p>Name: <strong className='user-name'>{name}</strong></p>
                <p>Location: <strong className='user-location'>{location}</strong></p>
            </div>
        );
    }
};

export default UserCard;