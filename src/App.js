import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCon from "./Pages/addCon/AddCon";
import EditCon from "./Pages/editCon/EditCon";
import Home from "./Pages/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-contact" element={<AddCon />} />
          <Route path="/edit-contact/:id" element={<EditCon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
