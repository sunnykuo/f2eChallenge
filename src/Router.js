import React from 'react';
import {
    HashRouter,
    Route,
    Link
  } from 'react-router-dom';

import Home from './containers/Home/Home';
import TomatoClock from './tomatoClock';
import FreeCell from './freeCell';

const Router = () => (
    <HashRouter>
        <div>
            <ul className="category">
                <li><Link to="/">回到首頁</Link></li>
                <li><Link to="/tomatoClock">蕃茄鐘</Link></li>
                <li><Link to="/freeCell">新接龍</Link></li>
                <hr />
            </ul>            
            <Route exact path="/" component={Home} />
            <Route path="/tomatoClock" component={TomatoClock} />
            <Route path="/freeCell" component={FreeCell} />
        </div>
    </HashRouter>   
);


export default Router;