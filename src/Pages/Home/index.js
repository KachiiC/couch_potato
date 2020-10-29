import React,{useState} from 'react'
// Components
import HomeModalContent from './Components/HomeModalContent';
import SiteSidebar from 'Components/SiteSidebar';
import PopularList from 'Components/PopularList'

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({
        "itemId": "",
        "entertainmentType": ""
    })

    return (
        <div className="site-row">
            <div className="main-section">
                <h1>Main Section</h1>
                <PopularList 
                entertainmentType="show" 
                title="Trending Shows"
                listType="trending"
                setSelectedItem={setSelectedItem} 
                setShowModal={setShowModal}
            />
            </div>
            {(showModal && 
                <HomeModalContent 
                    selectedItem={selectedItem} 
                    setShowModal={setShowModal}
            />)}
            <SiteSidebar 
                setSelectedItem={setSelectedItem}
                setShowModal={setShowModal}
            />
        </div>
    )
}

export default Home