import React from 'react'
// Pages
import Home from '../Pages/Home'
import About from '../Pages/About'
import TestPage from '../Pages/Test'

const PagesData = [
    {
        page_name: "About",
        page_display: <About />,
        page_path: "about"
    },
    {
        page_name: "Home",
        page_display: <Home />,
        page_path: "/"
    },
    {
        page_name: "Test",
        page_display: <TestPage />,
        page_path: "test"
    }
]

export default PagesData