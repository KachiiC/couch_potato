import React from 'react'
// Components
import Carousel from '@brainhubeu/react-carousel';
// CSS
import '@brainhubeu/react-carousel/lib/style.css'

const TestCarousel = (props) => (

        <Carousel infinite addArrowClickHandler 
            slidesPerScroll={5} slidesPerPage={5}
            arrowRight={">"} arrowLeft={"<"} >
            {props.children}
        </Carousel>
)

export default TestCarousel