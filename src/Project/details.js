import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";



function Details() {
 
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  const { albumId } = useParams();
  const [likes, setLikes] = useState([]);

  

  
  

  

 


  return (
    <div>
      {album && (
        <div>
          
          <h1>{album.name}</h1>
          <img
            src={`https://api.napster.com/imageserver/v2/albums/${album.id}/images/300x300.jpg`}
            alt={album.name}
          />
          <h2>Likes</h2>
          <ul className="list-group">
            {likes.map((like, index) => (
              <li key={index} className="list-group-item">
                {like.user.firstName} {like.user.lastName}
                <Link to={`/project/users/${like.user._id}`}>
                  @{like.user.username}
                </Link>
              </li>
            ))}
          </ul>

          <h2>Tracks</h2>
          <ul className="list-group">
            {tracks.map((track, index) => (
              <li key={index} className="list-group-item">
                <h3>{track.name}</h3>
                <audio controls>
                  <source src={track.previewURL} type="audio/mpeg" />
                </audio>
              </li>
            ))}
          </ul>
          <pre>{JSON.stringify(tracks, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Details;