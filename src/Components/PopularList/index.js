import React,{useState, useEffect} from 'react'
// CSS
import './PopularList.css'
// Components
import SiteModal from '../../Components/SiteModal'

const PopularList = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [detail, setDetail] = useState([])
    const [list, setList] = useState([])
    const results = props.result

    useEffect(() => {
    fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?year=2020&page=1&type=get-popular-${props.get}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
		"x-rapidapi-key": "985371e109mshb5666c0424d5dcfp1b7485jsndf2afe5a3591"
	}
    })
    .then(response => {
        return response.json()
    })
    .then((data) => {
        if (results === "movies") {
            setList(data.movie_results)    
        } else {
            setList(data.tv_results)
        }
    })
    .catch(err => {
        console.log(err);
    });

    },[props.get, results])

    const dislayShowsList = list.map((watch, index) => {

        const rename = () =>  setDetail(watch) 
        const changeVisibility = () => setShowModal(true)

        return (
            <div key={index}>
                <li>
                    <h6 onClick={() => {changeVisibility();rename()}}>{watch.title}</h6>
                </li>
            </div>
        )
    })

    return (
        <>
        { showModal && (
            <SiteModal closeModal={() => setShowModal(false)}>
              <div className="site-modal-content">
                <h2>{detail.title}</h2>
              </div>
            </SiteModal>
          )}
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