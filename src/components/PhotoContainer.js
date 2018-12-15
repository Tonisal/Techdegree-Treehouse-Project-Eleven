//contains photos received from flickr api
import React from 'react';

//Components
import Photo from './Photo';
import PhotoNotFound from './PhotoNotFound';

var PhotoContainer = function(props) {
  /*take data from props*/
  var result = props.data;
  let photos;

  if (result.length > 0) {
    /*if array.length more than one(received array), set photos as array*/
    /*go through each object in array and display each object in photo*/
    /* pass props --> url of photo and key for id*/
    photos = result.map( photo =>
      <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
             key={photo.id}
       />
    );
  } else {
    /*if array.length = 0(don't receive array) , display PhotoNotFound*/
    photos = <PhotoNotFound />;
  }

  return(
    <div className="photo-container">
      <h2>{props.title /*take props.title as title*/}</h2>
      <ul>
        {
    /*if loading= true, display 'loading', if not, call photos*/
          (props.loading)
          ? <p className="load">Loading...</p>
          : photos
        }
      </ul>
    </div>

  );
}

export default PhotoContainer;
