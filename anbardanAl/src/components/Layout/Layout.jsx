import Header from "./Header/Header"
import {Outlet} from "react-router-dom"; 
import Footer from "./Footer/Footer"
import React from "react";

const Layout = ()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout