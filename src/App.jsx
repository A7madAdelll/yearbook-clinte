// App.js
import React from "react";
import { createBrowserRouter , Route, Routes } from "react-router-dom";
import SchoolInfo from "./components/SchoolInfo";
import AddCell from "./components/AddCell";
import AddSchool from "./components/AddSchool"; // Import the AddSchool component
import Masr from "./components/Masr";

const App = () => {
  const router = createBrowserRouter([])
  return (
      // <Routes>
      //   {/* <Route path="/add-school" component={AddSchool} /> Add this line */}
      //   {/* <Route path="/masr" exact component={SchoolInfo} /> */}
      //   {/* <Route path="/:schoolName" exact component={SchoolInfo} />
      //   <Route path="/:schoolName/add-cell" component={AddCell} /> */}

      //   {/* <Route path="/masr" component={Masr} /> */}
      // </Routes>

      <></>
    
  );
};

export default App;
