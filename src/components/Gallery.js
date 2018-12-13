import React from 'react';

const Gallery = (props) => {

    const photos = props.photos;

    const photosMarkup = photos.map((photo) =>
            <li><img src={'http://farm' + photo.farm +'.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'}/></li>,
    );

    return (
        <div className="photo-container">
            <ul>
            {photosMarkup}
            </ul>
        </div>
    )
}

export default Gallery;