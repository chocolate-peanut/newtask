import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import PeopleTable from "PeopleTable";

import configureStore from "./store/config";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/people" element={<PeopleTable />} />
      </Routes>
    </BrowserRouter> */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
