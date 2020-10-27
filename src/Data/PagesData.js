import React from 'react'
// Pages
import Home from '../Pages/Home'
import About from '../Pages/About'

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
    }
]

export default PagesData