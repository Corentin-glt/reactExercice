/**
 * Created by corentin on 23/11/16.
 */
import React from 'react';
import Input from './input';

export default class App extends React.Component{
    onClick(){
        alert('coucou');
    }
    render(){
        return (
            <div>
                <h1>Bonjour</h1>
                <Input type="text" placeholder="Username" text="Username: "/>
                <Input type="password" placeholder="Password" text="Password: "/>
                <button onClick={() => this.onClick()}>Submit</button>
            </div>
        )
    }
}