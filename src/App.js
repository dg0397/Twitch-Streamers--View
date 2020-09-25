import React from 'react';
import './App.css';

import Header from 'components/Header'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import Home from 'pages/Home'
import Online from 'pages/Online'
import Ofline from 'pages/Ofline'

import { Route, Switch } from 'wouter';

import { StreamersContextProvider } from 'context/StreamerContext';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header/>
        <Menu/>
        <div className = 'Streamers'>
          <StreamersContextProvider>
            <Switch>
              <Route path = '/' component = {Home} />
              <Route path = '/online' component = {Online} />
              <Route path = '/ofline' component = {Ofline} />
            </Switch>
          </StreamersContextProvider>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
