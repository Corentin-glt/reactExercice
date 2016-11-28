/**
 * Created by corentin on 23/11/16.
 */
import React from 'react';
import Input from './input';
import {browserHistory} from 'react-router';

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateUsername(username){
        this.setState({username: username.target.value});
    }

    updatePassword(password){
        this.setState({password: password.target.value});
    }

    onSubmit(){
        browserHistory.push('/profile');
    }

    render(){
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <Input type="text" placeholder="Username"
                           text="Username: " update={this.updateUsername}/>

                    <Input type="password" placeholder="Password"
                           text="Password: " update={this.updatePassword}/>

                    <button onClick={() => this.onSubmit()}>Submit</button>
                </form>
            </div>
        )
    }
}