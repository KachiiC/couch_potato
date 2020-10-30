import React, {useEffect, useState} from 'react'
// Data
// import Loading from 'Components/Loading'
import apiKey from 'Data/ApiKey';
import RapidURL from 'Data/RapidURL'
// CSS
import './Test.css'
// Components

const TestPage = () => {

    const [detail, setDetail] = useState({
        "title": "",
        "description": "", 
        "genres": [""],
        "stars":[""]
        }
    )
    const [itemPoster, setItemPoster] = useState("")

    const detailUrl = `${RapidURL}?imdb=tt2741602&type=get-show-images-by-imdb`
    const imageUrl = `${RapidURL}?imdb=tt2741602&type=get-show-details`

    useEffect(() => {
        Promise.all([
            fetch(detailUrl , {"method": "GET", "headers": apiKey})
            .then (value => value.json()),
            fetch(imageUrl, {"method": "GET", "headers": apiKey})
            .then(value => value.json())
        ])
        .then((response) => {
            setDetail(response[0])
            setItemPoster(response[1])
        })
        .catch((err) => {
            console.log(err)
        }) 
    }, [detailUrl, imageUrl])

    console.log(detail)
    console.log(itemPoster)
    
    return (
        <h1> Test </h1>
    )

}

export default TestPage