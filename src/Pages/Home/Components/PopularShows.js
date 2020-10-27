import React,{useState, useEffect} from 'react'

const PopularShows = (props) => {

    const [List, setList] = useState([])

    const result = props.result

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
    .then((list) => {
        setList(list.tv_results)
    })
    .catch(err => {
        console.log(err);
    });

    },[])

    console.log(List)

    const dislayShowsList = List.map((show, index) => (
        <div key={index}>
            <h1>{show.index}</h1>
            <h2>{show.title}</h2>
            <h3>{show.year}</h3>
        </div>
    ))

    return (
        <div>
            <h1>Popular Shows</h1>
            {dislayShowsList}
        </div>
    )
}

export default PopularShows