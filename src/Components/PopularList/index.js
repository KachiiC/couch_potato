import React,{useState, useEffect} from 'react'
// Data
import apiKey from 'Data/ApiKey';
// CSS
import './PopularList.css'

const PopularList = (props) => {
    const [list, setList] = useState([])

    const entertainmentType = props.entertainmentType

    useEffect(() => {
        fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?year=2020&page=1&type=get-popular-${entertainmentType}s`, {    
        "method": "GET",
        "headers": apiKey
    })
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then((data) => {
        if (entertainmentType === "movie") {
            setList(data.movie_results)    
        } else {
            setList(data.tv_results)
        }
    })
    .catch(err => {
        console.log(err)
    })
    },[entertainmentType])

    const dislayShowsList = list.map((watch, index) => {

        const itemToSet = {
            "itemId": watch.imdb_id,
            "entertainmentType": props.entertainmentType
        }

        const repop = () =>  props.setSelectedItem(itemToSet)
        const changeVisibility = () => props.setShowModal(true)

        return (
            <div key={index}>
                <li>
                    <h6 onClick={() => {changeVisibility();repop()}}>{watch.title}</h6>
                </li>
            </div>
        )
    })

    return (
        <>
        <div className="section-border">
            <h3>{props.title}</h3>
            <ol>
                {dislayShowsList}
            </ol>
        </div>
        </>
    )
}

export default PopularList