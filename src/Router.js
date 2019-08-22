import React from 'react';
import {
    HashRouter,
    Route,
    Link
  } from 'react-router-dom';

import Home from './containers/Home/Home';
import TomatoClock from './project/tomatoClock';
import FreeCell from './project/freeCell';
import mp3Player from './project/mp3Player';
import payment from './project/payment';
import minigame from './project/minigame';
import hotelReservation from './project/hotelReservation';

const Router = () => (
    <HashRouter>
        <div>
            <ul className="category">
                <li><Link to="/">回到首頁</Link></li>
                <li><Link to="/tomatoClock">蕃茄鐘</Link></li>
                <li><Link to="/freeCell">新接龍</Link></li>
                <li><Link to="/mp3Player">MP3 Player</Link></li>
                <li><Link to="/payment">Payment</Link></li>
                <li><Link to="/minigame">Minigame</Link></li>
                <li><Link to="/hotelReservation">Hotel Reservation</Link></li>
                <hr />
            </ul>            
            <Route exact path="/" component={Home} />
            <Route path="/tomatoClock" component={TomatoClock} />
            <Route path="/freeCell" component={FreeCell} />
            <Route path="/mp3Player" component={mp3Player} />
            <Route path="/payment" component={payment} />
            <Route path="/90sGame" component={minigame} />
            <Route path="/hotelReservation" component={hotelReservation} />
        </div>
    </HashRouter>   
);


export default Router;