/**
 * Created by corentin on 23/11/16.
 */
import React from 'react';
import Input from './input';

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    updateUsername(username){
        this.setState({username: username.target.value});
    }

    updatePassword(password){
        this.setState({password: password.target.value});
    }

    render(){
        return (
            <div>
                <h1>Bonjour</h1>
                <form>
                    <Input type="text" placeholder="Username" text="Username: " update={this.updateUsername}/>
                    <Input type="password" placeholder="Password" text="Password: " update={this.updatePassword}/>
                    <button onClick={() => this.onClick()}>Submit</button>
                </form>
            </div>
        )
    }

    onClick(){
        alert('Username: ' + this.state.username +
            ' Password: ' + this.state.password);
    }
}