import { Component } from 'react'

class UserChild extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.name + " Inner Child Constructor.");
    }

    componentDidMount() {
        console.log(this.props.name + " Inner Child Mounted.");
    }
    render() {
        const { name } = this.props;
        console.log(name + " Inner Child Render.");

        return (
            <h1>UserChild</h1>
        )
    }
}

export default UserChild;