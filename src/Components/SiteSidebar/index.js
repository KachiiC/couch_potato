import React from 'react'
// Components
import PopularList from '../PopularList'

const SiteSidebar = (props) => (
        <div className="side-bar">
            <PopularList 
                entertainmentType="show" 
                listType="popular"
                setSelectedItem={props.setSelectedItem} 
                setShowModal={props.setShowModal}
            />
            <PopularList 
                entertainmentType="movie" 
                listType="popular"
                setSelectedItem={props.setSelectedItem} 
                setShowModal={props.setShowModal}
            />
        </div>
)

export default SiteSidebar