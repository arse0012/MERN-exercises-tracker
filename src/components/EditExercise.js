import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditExercise extends Component {
    constructor(props) {
        super(props);

        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            description:'',
            duration: 0,
            date: new Date(),
            users: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    description: response.data.description,
                    duration: response.data.duration,
                    date: new Date(response.data.date),
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/trainers/')
            .then(response => {
                this.setState({ 
                    trainers: response.data.map(trainer => trainer.firstName + ' ' + trainer.lastName)
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeUsername(e) {
        this.setState({
            firstName: e.target.value,
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

        axios.post('http://localhost:5000/exercises/' + this.props.match.params.id, exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Edit Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Trainer: </label>
                        <select ref="userInput"
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.trainers.map(function (trainer) {
                                    return <option
                                        key={trainer}
                                        value={trainer}>{trainer}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}