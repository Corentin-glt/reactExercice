/**
 * Created by corentin on 29/11/16.
 */
import React from 'react';
import {browserHistory} from 'react-router';

export default class VignetteItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tabVignette: []
        };

        this.addVignette = this.addVignette.bind(this);
    }

    addVignette(){
        browserHistory.push('/saveVignette');
    }

    render() {
        return (
            <div className='VignetteItem'>
                <span className="vignetteNom">
                    + - - - - - - - - - - - - + <br/>
                    + Name: {this.props.name} + <br/>
                    + - - - - - - - - - - - - +
                </span>
                <button onClick={() => this.addVignette()}> + </button>
            </div>
        );
    }
}