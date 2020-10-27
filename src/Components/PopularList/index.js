import React,{useState, useEffect} from 'react'
import './PopularList.css'

function PopularList(props){

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

    const dislayShowsList = list.map((watch, index) => (
        <div key={index}>
            <li>
                <p>{watch.title}</p>
            </li>
        </div>
    ))

    return (
        <div className="section-border">
            <h3>{props.title}</h3>
            <ol>
                {dislayShowsList}
            </ol>
        </div>
    )
}

export default PopularList