//refer to this template: https://dashboardpack.com/live-demo-preview/?livedemo=290

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import HomePage from './Homepage';
import PeopleTable from './PeopleTable';
import './stylesheets/base.scss';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">

        <div className="App-header header-shadow">
          <h1>Welcome to My App</h1>
        </div>

        <div className="app-sidebar sidebar-shadow">
          <nav className="scrollbar-sidebar ps ps--active-x ps--active-y">
            <div className="app-sidebar__inner">
              <ul className="vertical-nav-menu metismenu">
                <li className="app-sidebar__heading">
                  <Link to="/">Home</Link>
                </li>
                <li className="app-sidebar__heading">
                  <Link to="/people">People</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeopleTable />} />
      </Routes>
    </Router>
  );

  // return (
    // <Router>
    //   <div className="app-container">
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     </nav>

    //     <div className="row flex-grow-1">
    //       <div className="col-3">
    //         <Sidebar />
    //       </div>
    //       <div className="col-9 d-flex flex-column">
    //         <div className="flex-grow-1 overflow-auto">
    //           <Routes>
    //             <Route path="/people" element={<PeopleTable />} />
    //           </Routes>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Router>

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
  // );
}

export default App;
