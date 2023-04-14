import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return(
        <div className="App">
            <Router>
                <Routes>
                    <Route index element = {<h1>Hello World</h1>}></Route>
                    <Route path="movie/:id" element={<h1>Movies detail page</h1>}></Route>
                    <Route path="movies/:type" element={<h1>Moives list page</h1>}></Route>
                    <Route path="/*" element={<h1>Error page</h1>}></Route>
                </Routes>
            </Router>
        <Header/>
        <Footer/>
        </div>
        
    );
}

export default App;