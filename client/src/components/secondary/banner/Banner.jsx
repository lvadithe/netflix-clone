import React from 'react';
import "./banner.css";

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header className="banner__container" style={{
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundImage: `url("http://fondopantalla.com.es/file/730/2560x1440/crop/fondo-minimalista-negro.jpg")`
        }}>
            <div className="benner_content">
                <h1 className="banner__title">
                    Movie Name
                </h1>
                <div className="banner_buttons">
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className="banner__description">
                    { truncate(`This is a text description This is a text description This is a text description This is a text description
                    This is a text descriptionThis is a text descriptionThis is a text descriptionThis is a text description
                    This is a text descriptionThis is a text descriptionThis is a text descriptionThis is a text descriptionThis is a text description
                    This is a text descriptionThis is a text descriptionThis is a text descriptionThis is a text descriptionThis is a text description
                    This is a text descriptionThis is a text descriptionThis is a text descriptionThis is a text description
                    This is a text descriptionThis is a text descriptionThis is a text descriptionThis is a text descriptionThis is a text descriptionThis is a text description
                    This is a text descriptionThis is a text descriptionThis is a text descriptionThis is a text description
                    This is a text descriptionThis is a text descriptionThis is a text description`
                    , 150)}
                </h1>
            </div>

            <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner