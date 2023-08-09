//refer to this template: https://dashboardpack.com/live-demo-preview/?livedemo=290

import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/base.scss';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="app-header header-shadow d-flex justify-content-center">
        <nav className="navbar navbar-light">
          <div className="app_header__content">
            <span className="navbar-brand mb-0 h1">WELCOME</span>
          </div>
        </nav>
      </div>

      <div className="app-container__heading">
        <Link to="/">Home</Link>
      </div>
      <div className="app-container__heading">
        <Link to="/people">People</Link>
      </div>
    </div>
  );
}

export default App;
