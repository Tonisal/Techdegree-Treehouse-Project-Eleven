import React from 'react';

const Gallery = (props) => {

    const photos = props.photos;

    const photosMarkup = photos.map((photo) =>
            <img src={'http://farm' + photo.farm +'.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'}/>,
    );


    return (
        <div>
            {photosMarkup}
        </div>
    )
}

export default Gallery;