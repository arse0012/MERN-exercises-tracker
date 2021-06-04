import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Trainer = props => (
    <tr>
        <td>{props.trainer.firstName} {props.trainer.lastName}</td>
        <td>{props.trainer.email}</td>
        <td>{props.trainer.phone}</td>
        <td>
            <a href="#" onClick={() => { props.deleteTrainer(props.trainer._id) }}>delete</a>
        </td>
    </tr>
)

export default class TrainerList extends Component {
    constructor(props) {
        super(props);
        this.deleteTrainer = this.deleteTrainer.bind(this);
        this.state = { trainers: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/trainers')
            .then(response => {
                this.setState({ trainers: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteTrainer(id) {
        axios.delete('http://localhost:5000/trainers/' + id)
            .then(res => console.log(res.data));
        this.setState({
            trainers: this.state.trainers.filter(el => el._id !== id)
        })
    }

    trainerList() {
        return this.state.trainers.map(currenttrainer => {
            return <Trainer trainer={currenttrainer} deleteTrainer={this.deleteTrainer} key={currenttrainer._id} />;
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
                    <Link to="/newtrainer" className="btn btn-primary">Add Trainer</Link>
                </div>
            </div>
        )
    }
}