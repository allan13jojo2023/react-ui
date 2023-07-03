import logo from './logo.svg';
import './App.css';
import React from 'react';
import Weather from './components/Weather';


function App() {
  return (
    <div className='App'>
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <h2>Card 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Weather></Weather>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <h2>Card 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <h2>Card 3</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
