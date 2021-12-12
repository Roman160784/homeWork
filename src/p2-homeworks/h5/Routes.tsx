import React from 'react'
import { Route, Navigate, BrowserRouter, HashRouter, Routes } from "react-router-dom";
import HW1 from '../h1/HW1'
import HW2 from '../h2/HW2'
import HW3 from '../h3/HW3'
import HW4 from '../h4/HW4'
import Error404 from './pages/Error404';
import PreJunior from './pages/PreJunior';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    HW1: "/hw1",
    HW2: "/hw2",
    HW3: "/hw3",
    HW4: "/hw4",
}

function Routess() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Navigate replace to="/PRE_JUNIOR" />} />
                <Route path="/PRE_JUNIOR" element={<PreJunior />} />
                <Route path="/hw1" element={<HW1 />} />
                <Route path="/hw2" element={<HW2 />} />
                <Route path="/hw3" element={<HW3 />} />
                <Route path="/hw4" element={<HW4 />} />
                <Route element={<Error404 />} />
            </Routes>

        </div>
    )
}

export default Routess
