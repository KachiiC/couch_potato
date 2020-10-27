import React from 'react';
import PopularList from '../../Components/PopularList'

const Home = () => {

    return (
        <div className="site-row">
            <div className="main-section">
                <h1>Main Section</h1>
            </div>
            <div className="side-bar">
                <PopularList get="show" title="Popular Shows"/>
                <PopularList get="movie" title="Popular Films"/>
            </div>
        </div>
    )
}

export default Home