import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About";
import Register from "../pages/Register";
import Books from "../pages/Books";
import DefaultLayout from "../config/defaultLayout";
import Edit from "../pages/Edit";


const AppRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element = {<DefaultLayout component={<Home />}/>} />
            <Route path="/about" element = {<DefaultLayout component={<About />}/>}/>
            <Route path="/register" element = {<DefaultLayout component={<Register />}/>}/>
            <Route path="/edit/:id" element = {<DefaultLayout component={<Edit />}/>}/>
            <Route path="/books" element = {<DefaultLayout component={<Books />}/>}/>
        </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;