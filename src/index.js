import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SchoolInfo from "./components/SchoolInfo";
import AddCell from "./components/AddCell";
import AddSchool from "./components/AddSchool";
import Masr from "./components/Masr";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* AddSchool component */}
        <Route path="/addschool" element={<AddSchool />} />

        {/* AddCell component */}
        <Route path="/school/:schoolname/addcell" element={<AddCell />} />

        {/* Masr component */}
        <Route path="/Masr" element={<Masr />} />

        {/* SchoolInfo component with a dynamic parameter */}
        <Route path="/school/:schoolname" element={<SchoolInfo />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
