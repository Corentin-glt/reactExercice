/**
 * Created by corentin on 29/11/16.
 */
import React from 'react';
import Input from '../App/input'

export default class VignetteItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tabVignette: []
        };
        this.updateName = this.updateName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addVignette = this.addVignette.bind(this);
    }

    addVignette(){
        console.log('yolo');
        return(
            <div>
                <Input type="text" placeholder="Name"
                       text="Name: " update={this.updateName}/>

                <button onClick={() => this.onSubmit()}>Submit</button>
            </div>
        )
    }

    onSubmit(){
        for(elem of this.state.tabVignette){
            console.log('yolo');
            console.log(elem);
        }
    }
    updateName(name){
        this.setState({tabVignette: this.state.tabVignette.concat(name)});
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