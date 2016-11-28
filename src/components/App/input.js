/**
 * Created by corentin on 23/11/16.
 */
import React from 'react';

export default class Input extends React.Component{

    render(){
        return (
            <div>
                {this.props.text}<input type={this.props.type} onChange={this.props.update} placeholder={this.props.placeholder}/>
            </div>
        )
    }
}