import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PeopleTable from 'PeopleTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/people" element={<PeopleTable />} />
    </Routes>
  </BrowserRouter>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
