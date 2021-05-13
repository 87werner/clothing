import React from 'react';
import {withRouter} from 'react-router-dom'; //HOC

import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    console.log()
    return (
        <div 
                                                        //somematchedUrl/linkUrl, linkUrl just appends the random url
         className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

        <div className='background-image'  style={{
            backgroundImage:`url(${imageUrl})` 
        }} />
        <div className="content">
           <h1 className="title"> {title.toUpperCase()}</h1>
           <span className="subtile"> SHOP NOW</span>

        </div>
    </div>
    )
}

export default withRouter(MenuItem); // now have access to history, location , match props
