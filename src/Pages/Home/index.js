import React,{useState} from 'react'
// Components
import HomeModalContent from 'Pages/Home/PageComponents/HomeModalContent';
import SiteSidebar from 'Components/SiteSidebar';
import TestPage from 'Pages/Test/'

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({
        "itemId": "",
        "entertainmentType": ""
    })

    return (
        <div className="site-row">
            <TestPage />
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