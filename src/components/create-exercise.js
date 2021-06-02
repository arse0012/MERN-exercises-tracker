import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.firstName + " " + user.lastName),
                        firstName: response.data[0].firstName,
                        lastName: response.data.lastName
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        };

        console.log(exercise);

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }
    submitExercise(event) {
        event.preventDefault();

        axios.post('http://localhost:5000/exercises', {
            teachername: this.refs.teachername.value,
            description: this.refs.description.value,
            duration: this.refs.duration.value,
            date: this.refs.date.value
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="form-group">
                <h3>Create New Exercise</h3>
                <form className="col s12" onSubmit={this.submitExercise.bind(this)}>
                    <div className="form-group">
                        <div className="row">
                            <label htmlFor="trainer">Trainer</label>
                            <select id="trainer" ref="trainer" required className="row">
                                {this.state.users.map(function (user) { return <option key={user} value={user}> {user} </option>; })}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-field col s6">  
                            <input id="description" ref="description" type="text" />
                            <label htmlFor="description">Description</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="duration" ref="duration" type="number" />
                            <label htmlFor="duration">Duration (in minutes) </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <label htmlFor="date">Date</label>
                            <div>
                                <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" name="action">Log Exercise</button>
                </form>
            </div>
        )
    }
}