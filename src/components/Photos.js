import React from 'react';

const Photos = (props) => {
    let photos = props.photos;

    if (photos.length > 0) {
        photos = photos.map(photo =>
            <li key={photo.id}><img
                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                alt={photo.tag}/>
            </li>
        );
    }

    return (
        <div className="photo-container">
            <h2>{props.title}</h2>
            <ul>
                {photos}
            </ul>
        </div>

    );
}

export default Photos;
