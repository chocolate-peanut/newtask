import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PeopleTable from './PeopleTable';
import './style.scss';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/people" className="nav-link">Star Wars Characters</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/people" element={<PeopleTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
