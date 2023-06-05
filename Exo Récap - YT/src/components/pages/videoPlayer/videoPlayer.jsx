import { useEffect, useState } from "react";
import axios from "axios";
import {nanoid} from 'nanoid';
import Search from "../../search/search";
import Player from "../../player/player";
import List from "../../list/list";
import './videoPlayer.css';

const VideoPlayer = () => {

  // Création des states pour la recherche, la liste de videos, la video selectionnée et les commentaires
  const [searchValue, setSearchValue] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [comments, setComments] = useState([]);
 
  // Récupérer la clé d'API depuis le fichier .env - La variable doit commencer par VITE_ - Le fichier .env doit être à la racine du projet et ignorer par git (gitignore)
  const API_KEY = import.meta.env.VITE_YT_API_KEY;

  // Dans ce useEffect, on va récupérer les videos en relation avec la recherche
  useEffect(() => {
    if (searchValue !== "") {
      axios
        .get(`https://www.googleapis.com/youtube/v3/search/?key=${API_KEY}&q=${searchValue}`)
        .then((response) => {
          setVideoList([response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchValue]);

  // Dans ce useEffect, on va récupérer les commentaires de la video selectionnée via son id et le paramètre part=snippet dans l'url de la requête
  useEffect(() => {
    if (selectedVideo !== '') {
      axios
        .get(`https://www.googleapis.com/youtube/v3/commentThreads/?key=${API_KEY}&videoId=${selectedVideo}&part=snippet`)
        .then((response) => {
          setComments(response.data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedVideo]);

  console.log(comments)

  return (
    <div className="layout-global">
    <section className="search-layout">
      <Search setSearch={setSearchValue} />
    </section>
    <section className="player-list-layout">
      <div className="player-video-layout">
        <Player videoId={selectedVideo}/>
        <section className="comments-layout">
          <h4>Comments</h4>
          {comments.length > 0 ? comments.map((comment) => (
            <div key={nanoid()} className="comment">
              <p className="comment-author">{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
              <p className="comment-text">{comment.snippet.topLevelComment.snippet.textOriginal}</p>
              </div>
          )) : null}
        </section>
      </div>
      {videoList.length > 0 ? (<List list={videoList} setVideo={setSelectedVideo} />) : null}
    </section>
    </div>
  );
};

export default VideoPlayer;
