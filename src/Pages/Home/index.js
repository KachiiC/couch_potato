import React from 'react';
import PopularList from '../../Components/PopularList'

const Home = () => {

    const movie = `movies&page=1&year=2020`

    return (
        <div className="site-row">
            <div className="main-section">
                <h1>Main Section</h1>
            </div>
            <div className="side-bar">
                <PopularList get={"shows"} result="show" title="Popular Shows"/>
                <PopularList get={movie} result="movies" title="Popular Films"/>
            </div>
        </div>
    )
}

export default Home