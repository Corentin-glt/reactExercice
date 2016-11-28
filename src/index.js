/**
 * Created by corentin on 23/11/16.
 */
import React from 'react';
import { render } from 'react-dom';
import App from 'components/App/app';
import Profile from 'components/Profile/profile';
import Vignette from 'components/Vignette/vignette';
import {Router, Route, browserHistory} from 'react-router';

render((
    <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/profile' component={Profile} >
            <Route path='/vignette' component={Vignette} />
        </Route>
    </Router>), document.querySelector('#app'));

