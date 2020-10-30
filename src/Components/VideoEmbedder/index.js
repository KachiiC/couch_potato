import React from 'react'

const VideoEmbedder = (props) => (

     <iframe width="450" height="253" src={`https://www.youtube.com/embed/${props.video}`}
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture" allowFullScreen title="youtube_container" />
        
)

export default VideoEmbedder