import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeaturesPage from '../pages/FeaturesPage'
import HomePage from '../pages/HomePage'
import PricingPage from '../pages/PricingPage'
import StoriesPage from '../pages/StoriesPage'

const RootRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/stories" element={<StoriesPage/>} />
                <Route path="/features" element={<FeaturesPage/>} />
                <Route path="/pricing" element={<PricingPage/>} />
            </Routes>
        </Router>
    )
}

export default RootRoute
