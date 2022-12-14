// eslint-disable-next-line
import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import BodyIndex from "./components/Main/body/BodyIndex";




import Main from "./components/Main/Main";
import About from "./components/About/About";

import ProductWrap from "./components/Products/ProductWrap";
import AddUser from "./components/add/AddUser";
import Mains from "./components/add/Mains";




function App() {




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<BodyIndex />} />
          <Route path="/about" element={<About />} />

          <Route path="/products/:id" element={<ProductWrap />} />

        </Route>

        <Route path="/add/:id" element={<Mains />}>
          <Route index element={<AddUser />} />
        </Route>


      </Routes>


      <script></script>
    </div>
  );
}

export default App;
