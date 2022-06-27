import React from 'react';
import ReactDOM from 'react-dom/client';
import './root.css';
import Home from './home/Home';
import Explore from './explore/Explore';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Library from "./library/Pages/Library";
import Playlists from "./library/Pages/Playlists";
import Albums from "./library/Pages/Albums";
import Songs from "./library/Pages/Songs";
import Artists from "./library/Pages/Artists";
import Subscriptions from "./library/Pages/Subscriptions"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/library' element={<Library/>}>
            <Route path='playlists' element={<Playlists/>} />
            <Route path='albums' element={<Albums/>} />
            <Route path='songs' element={<Songs/>} />
            <Route path='artists' element={<Artists/>} />
            <Route path='subscriptions' element={<Subscriptions/>} />
        </Route>
        <Route path="/explore" element={<Explore/>} />
      </Routes>

    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
