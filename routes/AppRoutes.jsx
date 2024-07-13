import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Dashboard from "../components/Dashboard/Dashboard";
import Help from "../components/Help/Help";
import Explore from "../components/Explore/Explore";
import QuoteGeneration from '../components/QuoteGeneration/QuoteGeneration'

const AppRoutes = () => {
    return (
        
            <Routes>
                <Route path="/" element={<><NavBar
                    items={[
                        { title: "Explore", path: '/explore', imgpath: "../assets/Explore.svg" },
                        { title: "Help", path: '/help', imgpath: "../assets/Help.svg" }
                    ]}
                /><Dashboard /></>} />
                <Route path="/explore" element={<><NavBar items={[
                    { title: "Help", path: '/help', imgpath: "../assets/Help.svg" }
                ]} /><Explore /></>} />
                <Route path="/help" element={<Help />} />
                <Route path="/generate-quote" element={<>
                    <NavBar items={[
                        { title: "Help", path: '/help', imgpath: "../assets/Help.svg" }
                    ]} /><QuoteGeneration /></>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
    )
}

export default AppRoutes
