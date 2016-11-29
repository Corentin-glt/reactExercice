/**
 * Created by corentin on 28/11/16.
 */
import React from 'react';
import VignetteItem from './vignetteItem';

export default class Vignette extends React.Component {
    render() {
        return (
            <div className="vignetteList">
                <VignetteItem name="Nom">Vignette</VignetteItem>

            </div>
        );
    }
}