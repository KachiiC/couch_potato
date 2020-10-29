import React,{useState, useEffect} from 'react'
// Data
import apiKey from 'Data/ApiKey'
import RapidURL from 'Data/RapidURL'
// import TVImageData from './TVImageData'
// import TVDetailData from './TVDetailData'
// import MovieDetailData from './MovieDetailData'
// import MovieImageData from './MovieImageData'
// Components
import SiteModal from 'Components/SiteModal'
import VideoEmbed from 'Components/VideoEmbedder'


const HomeModalContent = (props) => {
    
    const [detail, setDetail] = useState({
        "title": "",
        "description": "", 
        "genres": [""],
        "stars":[""]
        }
    )
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
            setDetail(detailData)
        })
        .catch(err => {
            console.log(err);
        });

    },[itemId, entertainmentType])

    const entertainmentPosterId = entertainmentType === "movie" ? "movies" : "show"

    useEffect(() => {
        fetch(`${RapidURL}=${itemId}&type=get-${entertainmentPosterId}-images-by-imdb`, {
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

    },[itemId, entertainmentPosterId])

    console.log(detail)

    const genresList = detail.genres.slice(0, 4).map((genre, index) => (
          <button className="genre-button" key={index}>{genre}</button>
        )
    )

    const charcterCount = detail.description.split("");

    const displayedDescription = charcterCount.length > 230 ? 
    charcterCount.slice(0,230).join("") + "..."
    : detail.description

    const displayActors = detail.stars.slice(0,2).join(", ") + " and " + detail.stars[3]

    return (
        <SiteModal closeModal={() => props.setShowModal(false)}>
            <div className="poster-container">
                <img className="poster-image" src={itemPoster} alt="poster" />
                <h4 className="rating-content">IMDB Rating: {detail.imdb_rating}</h4>
            </div>
            <div className="text-container">
                <h4 className="site-modal-title">{detail.title}</h4>
                <p className="site-modal-description">{displayedDescription}</p>
                <div className="genre-buttons-container">{genresList}</div>
                <div className="actors-list">
                    <b>Starring:</b> {displayActors}
                </div>
                <div className="trailer-container">
                    <VideoEmbed video={detail.youtube_trailer_key} />
                </div>
            </div>
        </SiteModal>
    )
}

export default HomeModalContent