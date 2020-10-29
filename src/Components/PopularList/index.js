import React,{useState, useEffect} from 'react'
// Data
import apiKey from 'Data/ApiKey';
import RapidURL from 'Data/RapidURL'
// import TVListData from './TVListData'
// import MovieListData from './MovieListData'
// CSS
import './PopularList.css'

const PopularList = (props) => {

    const [list, setList] = useState([])

    const listType = props.listType
    const entertainmentType = props.entertainmentType

    useEffect(() => {
        fetch(`${RapidURL}?year=2020&page=1&type=get-${listType}-${entertainmentType}s`, {    
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
    },[entertainmentType, listType])

    const dislayShowsList = list.map((watch, index) => {

        const itemToSet = {
            "itemId": watch.imdb_id,
            "entertainmentType": props.entertainmentType
        }

        const repop = () =>  props.setSelectedItem(itemToSet)
        const changeVisibility = () => props.setShowModal(true)

        return (
                <li key={index}>
                    <h6 className="content-title"onClick={() => {changeVisibility();repop()}}>
                        {watch.title}
                    </h6>
                </li>
        )
    })

    const listTypeHeading = listType.charAt(0).toUpperCase() + listType.slice(1)
    const listContentHeading = entertainmentType.charAt(0).toUpperCase() + entertainmentType.slice(1)

    return (
        <>
        <div className="section-border">
            <h3 className="content-title">{listTypeHeading} {listContentHeading}s</h3>
            <ol>
                {dislayShowsList}
            </ol>
        </div>
        </>
    )
}

export default PopularList