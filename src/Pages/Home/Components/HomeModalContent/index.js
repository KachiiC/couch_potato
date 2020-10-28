import React,{useState, useEffect} from 'react'
// Data
import apiKey from 'Data/ApiKey'
import RapidURL from 'Data/RapidURL'
// Components
import SiteModal from 'Components/SiteModal'
import VideoEmbed from 'Components/VideoEmbedder'
import ImageData from './ImageData'
import DetailData from './DetailData'


const HomeModalContent = (props) => {
    
    const [detail, setDetail] = useState([]);
    const [itemPoster, setItemPoster] = useState("")

    const itemId = props.selectedItem.itemId
    const entertainmentType = props.selectedItem.entertainmentType

    useEffect(() => {
        fetch(`${RapidURL}=${itemId}&type=get-${entertainmentType}-details`, {
        "method": "GET",
        "headers": apiKey
        })
        .then(response => {
            return response.json()
        })
        .then((detailData) => {
            console.log(detailData)
            setDetail(detailData)
        })
        .catch(err => {
            console.log(err);
        });

    },[itemId, entertainmentType])

    useEffect(() => {
        fetch(`${RapidURL}=${itemId}&type=get-${entertainmentType}-images-by-imdb`, {
        "method": "GET",
        "headers": apiKey
        })
        .then(response => {
            return response.json()
        })
        .then((detailData) => {
            console.log(detailData)
            setItemPoster(detailData.poster)
        })
        .catch(err => {
            console.log(err);
        });

    },[itemId, entertainmentType])

    // const genresList = detail.genres.map((genre, index) => (
    //       <button className="genre-button" key={index}>{genre}</button>
    //     )
    // )

    return (
        <SiteModal closeModal={() => props.setShowModal(false)}>
            <div className="poster-container">
                <img className="poster-image" src={itemPoster} alt="poster" />
                <h3 className="rating-content">Rating: {detail.imdb_rating}</h3>
            </div>
            <div className="text-container">
                <h4>{detail.title}</h4>
                <p>{detail.description}</p>
                <VideoEmbed video={detail.youtube_trailer_key} />
            </div>
        </SiteModal>
    )
}

export default HomeModalContent