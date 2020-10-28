import React from 'react'
// CSS
import './SiteModal.css'

const SiteModal = (props) => {
    
    const { closeModal } = props;

    return (

        <div className="site-modal-overlay">
            <div className="site-display-modal">
                <div className="site-modal-box">
                    <div className="site-modal-content">
                        <div className="site-displayed-content">
                            {props.children}
                        </div>
                    </div>
                    <div className="site-modal-close-button" onClick={closeModal}>X</div>     
                </div>
            </div>
        </div>
    )
}

export default SiteModal