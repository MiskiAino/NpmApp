import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('form is submited . E-mail value is ', this.state.email);
    }
    handleEmailChange(event){
        console.log('E-mail was changed', event.target.value );
        this.setState({email: event.target.value});
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
            </form>
        );
    }
}

export default RegistrationForm;
