/**
 * Created by corentin on 29/11/16.
 */
import React from 'react';
import Input from '../App/input';
import {browserHistory} from 'react-router';

export default class saveVignette extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nameVignette:''
        };

        this.updateName = this.updateName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateName(nameVignette){
        this.setState({nameVignette: nameVignette});
    }

    onSubmit(){
        localStorage.setItem('nameVignette',this.state.nameVignette.toString());
        browserHistory.push('/vignette');
    }

    render() {
        return (
            <div>
                <Input type="string" placeholder="Name"
                       text="Name: " update={this.updateName}/>

                <button onClick={() => this.onSubmit()}>Submit</button>
            </div>
        );
    }
}