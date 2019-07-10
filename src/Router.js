import React from 'react';
import {
    HashRouter,
    Route,
    Link
  } from 'react-router-dom';

import Home from './containers/Home/Home';
import AsyncApp from './example/AsyncApp';
import TomatoClock from './tomatoClock';

import './App.scss'

const Router = () => (
    <HashRouter>
        <div>
            <ul>
                <li><Link to="/">回到首頁</Link></li>
                <li><Link to="/example">測試用</Link></li>
                <li><Link to="/tomatoClock">蕃茄鐘</Link></li>
            </ul>
            <hr />            
            <Route exact path="/" component={Home} />
            <Route path="/example" component={AsyncApp} />
            <Route path="/tomatoClock" component={TomatoClock} />
        </div>
    </HashRouter>   
);


export default Router;