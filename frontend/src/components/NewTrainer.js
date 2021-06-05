import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTrainer extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            phone: 0,
            email: ''
        };
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
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const newTrainer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email
        };
        console.log(newTrainer);

        axios.post('http://localhost:5000/trainers', newTrainer)
        .then(res => console.log(res.data));

        this.setState({
            firstName: '',
            lastName: '',
            phone: 0,
            email: ''
        })
    }

    render() {
        return (
            <div className="row">
                <h3>Create Trainer</h3>
                <form className="col s12" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.onChangeFirstName} />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.lastName}
                                onChange={this.onChangeLastName} />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="number"
                                required
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone} />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" 
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" name="action">Add</button>
                </form>
            </div>
        );
    }
}