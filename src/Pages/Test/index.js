import React, {useEffect, useState} from 'react'
// Data
import RapidURL from 'Data/RapidURL'
import apiKey from 'Data/ApiKey';
// import PageImagesData from 'Data/PageImagesData'
// CSS
import './Test.css'
// import Loading from 'Components/Loading'
// Components
import TestCarousel from './TestComponents';

const TestPage = () => {

    const trendingUrl = `${RapidURL}?page=1&type=get-trending-shows`
    const [resultsId, setResultsId] = useState([])
    const [imageURL, setImageURL] = useState([])

    useEffect(() => {
        fetch(trendingUrl, { "method": "GET", "headers": apiKey})
            .then(response => response.json())
        .then(data => {
                setResultsId(data.tv_results.map((id) => id.imdb_id))
            }
        )
        .catch(err => console.log(err))
    }, [trendingUrl])

    const trendingId = resultsId.map((id) => (
            `${RapidURL}?imdb=${id}&type=get-show-images-by-imdb`
        )
    )

    useEffect(() => {
        Promise.all(trendingId.map((trend) =>
            fetch(trend, { "method": "GET", "headers": apiKey })
            .then (response => response.json())
        ))
        .then((contentData) => {
            setImageURL(contentData.map((data) => data))
        })
        .catch(err => console.log(err))
    },[])

    console.log(imageURL)

    const displayTrends = imageURL.map((trend) => (
            <div>
                <h6 className="trending-title">{trend.title}</h6>
                <img src={trend.poster} className="trending-pic" alt="trending-poster" />
            </div>
        )
    )

    return (
        <div className="main-section">
            <h1>Test</h1>
            <TestCarousel className="trending-carousel-slider">
                {displayTrends}
            </TestCarousel>
        </div>
    )

}

export default TestPage