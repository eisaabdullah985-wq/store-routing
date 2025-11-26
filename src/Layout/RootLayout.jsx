import React from "react";
import NavBar from "../Components/NavBar"
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

export default function RootLayout() {
    return( 
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}