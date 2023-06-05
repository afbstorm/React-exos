import PropTypes from 'prop-types';
import axios from 'axios';
import {nanoid} from 'nanoid';
import { useEffect, useState } from 'react';
import './list.css';

const List = (props) => {

  // Récupérer la liste de video depuis videoPlayer.jsx et la fonction setVideo
    const { list, setVideo } = props;
    const [thumbnailList, setThumbnailList] = useState([]);

    // Récupérer la clé d'API depuis le fichier .env - La variable doit commencer par VITE_ - Le fichier .env doit être à la racine du projet et ignorer par git (gitignore)
    const API_KEY = import.meta.env.VITE_YT_API_KEY;

    // Fonction pour mettre à jour le state de videoId
    const handleVideo = (e, id) => {
        setVideo(id);
    };

    // Dans ce useEffect, on va récupérer les thumbnails des videos de la liste de video en ajoutant le paramètre part=snippet dans l'url de la requête
    useEffect(() => {
      // Si la liste de video n'est pas vide
        if (list !== "") {
          // on va créer un tableau avec les id des videos de la liste de video et les séparer par une virgule (ex: ['id1', 'id2', 'id3'] => 'id1,id2,id3') pour les injecter dans l'url de la requête
            const listId = list.map((v) => v.items.map((item) => item.id.videoId).join(','));
            axios
              .get(`https://www.googleapis.com/youtube/v3/videos/?key=${API_KEY}&id=${listId}&part=snippet`)
              .then((response) => {
                setThumbnailList([response.data]);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }, [list]);

        return (
            list ? (
              <div className='thumbnails'>
                {thumbnailList && thumbnailList.map((v) => v.items.map((item) => (
                  <div key={nanoid()} className='thumbnail'>
                    <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} onClick={(e) => handleVideo(e, item.id)} />
                    <p className='thumb-title'>{item.snippet.title.length > 15 ? item.snippet.title.substring(0, 25) + '...' : item.snippet.title}</p>
                  </div>
                )))}
              </div>
            ) : null
          );
        };

List.propTypes = {
    list: PropTypes.array.isRequired,
    setVideo: PropTypes.func.isRequired,
};

export default List;