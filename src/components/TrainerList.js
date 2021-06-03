import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
    <tr>
        <td>{props.user.firstName} {props.user.lastName}</td>
        <td>{props.user.email}</td>
        <td>{props.user.phone}</td>
        <td>
            <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
        </td>
    </tr>
)

export default class TrainersList extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteUser(id) {
        axios.delete('http://localhost:5000/users/' + id)
            .then(res => console.log(res.data));
        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }

    trainerList() {
        return this.state.users.map(currenttrainer => {
            return <User user={currenttrainer} deleteUser={this.deleteUser} key={currenttrainer._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Trainers</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Trainer</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.trainerList()}
                    </tbody>
                </table>
                <div className="navbar-item">
                    <Link to="/user" className="btn btn-primary">Add Trainer</Link>
                </div>
            </div>
        )
    }
}