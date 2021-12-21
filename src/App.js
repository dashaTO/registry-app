import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./routes/Home" 
import Registry from "./routes/Registry"
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <Fragment>
            <Routes>
              <Route path="/" exact element={<Home />}>
              </Route>
              <Route path="/registry" element={<Registry />}>
              </Route> 
            </Routes> 
          </Fragment>       
        </BrowserRouter>
    </div>
  );
}

export default App;
