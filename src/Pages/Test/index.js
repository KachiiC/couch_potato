import React, {useState} from 'react'
// Data
import TestPicturesData from './TestData'
// CSS
import './Test.css'
// Components
import SiteModal from '../../Components/SiteModal'


const TestPage = () => {

    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState([])
  
    const displayPictures = TestPicturesData.map((picture, index) => {
  
      const rename = () =>  setResult(picture) 
      const changeVisibility = () => setShowModal(true)
  
      return (
          <div className="gallery-item" key={index}>
              <h1>{picture.name}</h1>
              <img src={picture.url} alt={picture.name} onClick={() => {changeVisibility();rename()}} />
          </div>
      )
    })

    
  
    return (
        <div className="site-row">
          { showModal && (
            <SiteModal closeModal={() => setShowModal(false)}>
                <h2>{result.name}</h2>
                <img src={result.url} alt={result.name} />
            </SiteModal>
          )}
          <div className="main-container">
            <h1>Fight Strategies</h1>
            <div className="site-row">
              {displayPictures}
            </div>
          </div>
        </div>
    );

}

export default TestPage