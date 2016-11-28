/**
 * Created by corentin on 28/11/16.
 */
import React from 'react';
import { Link } from 'react-router';

export default class Profile extends React.Component{

    render() {
        return (
            <div>
                <h1>Your profile</h1>
                <ul role="nav">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/vignette">Vignette</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}