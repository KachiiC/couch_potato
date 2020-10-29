import React from 'react'
// Components
import PopularList from '../PopularList'

const SiteSidebar = (props) => (
        <div className="side-bar">
            <PopularList 
                entertainmentType="show" 
                title="Popular Shows"
                listType="popular"
                setSelectedItem={props.setSelectedItem} 
                setShowModal={props.setShowModal}
            />
            <PopularList 
                entertainmentType="movie" 
                title="Popular Films" 
                listType="popular"
                setSelectedItem={props.setSelectedItem} 
                setShowModal={props.setShowModal}
            />
        </div>
)

export default SiteSidebar