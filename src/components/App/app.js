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

            users:[
                {username:'corentin', password: 'corentin'},
                {username:'jocelyne', password: 'jocelyne'},
                {username:'jeremie', password: 'jeremie'}
            ],

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
        for(var user of this.state.users){
            if (user.username === this.state.username && user.password === this.state.password){
                localStorage.setItem('username', JSON.stringify(user.username));
                browserHistory.push('/profile');
            }
        }
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