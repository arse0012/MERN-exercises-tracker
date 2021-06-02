import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    submitUser(event) {
        event.preventDefault();

        axios.post("http://localhost:5000/users", {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value
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
            <div className="row">
                <h3>Add User</h3>
                <form className="col s12" onSubmit={this.submitUser.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" ref="firstName" type="text" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" ref="lastName" type="text" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="phone" ref="phone" type="text" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" ref="email" type="text" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" name="action">Add User</button>
                </form>
            </div>
        );
    }
}