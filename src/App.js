import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PeopleTable from './PeopleTable';
import Sidebar from './Sidebar';
import './index.css';
import './style.scss';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* Your navbar content here */}
        </nav>

        <div className="row flex-grow-1">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9 d-flex flex-column">
            <div className="flex-grow-1 overflow-auto">
              <Routes>
                <Route path="/people" element={<PeopleTable />} />
                {/* Add other routes for different components */}
                {/* For example:
              <Route path="/planets" element={<PlanetsTable />} />
              */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>

    // <Router>
    //   <div className="container">
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //       <ul className="navbar-nav mr-auto">
    //         <li className="nav-item">
    //           <Link to="/people" className="nav-link">Star Wars Characters</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Routes>
    //       <Route path="/people" element={<PeopleTable />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
