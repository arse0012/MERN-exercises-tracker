import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            description: '',
            duration: '',
            date: new Date(),
            trainers: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/trainers/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        trainers: response.data.map(trainer => trainer.firstName + " " + trainer.lastName),
                        firstName: response.data[0].firstName,
                        lastName: response.data[0].lastName
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        };

        console.log(exercise);

        axios.post('http://localhost:5000/exercises', exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <label htmlFor="trainer">Trainer</label>
                        <select id="trainer" required className="form-control">
                            {this.state.trainers.map(function (trainer) { return <option key={trainer} value={trainer}> {trainer} </option>; })}
                        </select>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                            />
                            <label htmlFor="description">Description</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.duration}
                                onChange={this.onChangeDuration}
                            />
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