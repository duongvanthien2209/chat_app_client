import React from 'react';

import './infoBar.css';

// Icons
import onlineIcon from '../../assets/images/wi-fi.svg';
import closeIcon from '../../assets/images/close.svg';

const InforBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} />
                <h3>{room}</h3>
            </div>

            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} /></a>
            </div>
        </div>
    );
};

export default InforBar;

