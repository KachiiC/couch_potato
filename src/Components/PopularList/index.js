import React,{useState, useEffect} from 'react'
// CSS
import './PopularList.css'
// Components
import SiteModal from '../../Components/SiteModal'
import apiKey from './ApiHeader';

const PopularList = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [itemId, setItemId] = useState("")
    const [itemPoster, setItemPoster] = useState("")
    const [detail, setDetail] = useState([])
    const [list, setList] = useState([])

    const get = props.get

    useEffect(() => {
        fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?year=2020&page=1&type=get-popular-${get}s`, {
        "method": "GET",
        "headers": apiKey
    })
    .then(response => {
        return response.json()
    })
    .then((data) => {
        if (get === "movie") {
            setList(data.movie_results)    
        } else {
            setList(data.tv_results)
        }
    })
    .catch(err => {
        console.log(err)
    })
    },[get])

    const dislayShowsList = list.map((watch, index) => {

        const repop = () =>  setItemId(watch.imdb_id)
        const changeVisibility = () => setShowModal(true)

        return (
            <div key={index}>
                <li>
                    <h6 onClick={() => {changeVisibility();repop()}}>{watch.title}</h6>
                </li>
            </div>
        )
    })

    useEffect(() => {
            fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=${itemId}&type=get-${get}-details`, {
            "method": "GET",
            "headers": apiKey
        })
        .then(response => {
            return response.json()
        })
        .then((detailData) => {
            setDetail(detailData)
        })
        .catch(err => {
            console.log(err);
        });

    },[itemId, get])

    useEffect(() => {
        fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=${itemId}&type=get-${get}-images-by-imdb`, {
        "method": "GET",
        "headers": apiKey
        })
        .then(response => {
            return response.json()
        })
        .then((detailData) => {
            setItemPoster(detailData.poster)
        })
        .catch(err => {
            console.log(err);
        });

    },[itemId, get])

    return (
        <>
        { showModal && (
            <SiteModal closeModal={() => setShowModal(false)}>
                <div>
                    <h2>{detail.title}</h2>
                    <p>{detail.description}</p>
                    <p>Rating: {detail.imdb_rating}</p>
                    <img src={itemPoster} alt="item-poster" />
                </div>
            </SiteModal>
          )
        }
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