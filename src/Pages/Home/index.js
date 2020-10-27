import React from 'react';
import PopularList from './Components/PopularList'

const Home = () => {

    const movie = "movies&page=1&year=2020"

    return (
        <>
            <PopularList get={"shows"} result={"show"} /> 
            <PopularList get={movie} result={"movies"} />
        </>
    )
}

export default Home