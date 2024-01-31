import { Component } from 'react';

class UserCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, location, avatar_url} = this.props.userInfo; 

        return (
            <div className='user-card'>
            <img src={avatar_url} className='user-img'/>
                <p>Name: <strong className='user-name'>{name}</strong></p>
                <p>Location: <strong className='user-location'>{location}</strong></p>
            </div>
        );
    }
};

export default UserCard;