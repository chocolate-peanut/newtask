import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/people" className="nav-link">Star Wars Characters</Link>
                </li>
                {/* Add other sidebar navigation items here */}
                {/* For example:
        <li className="nav-item">
          <Link to="/planets" className="nav-link">Star Wars Planets</Link>
        </li>
        */}
            </ul>
        </div>
    );
};

export default Sidebar;
