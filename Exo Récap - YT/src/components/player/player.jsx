import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import './player.css';

const Player = (props) => {

    // Récupérer la videoId depuis videoPlayer.jsx
    const { videoId } = props;

    // Options pour le player
    const opts = {
        height: '350',
        width: '500',
        playerVars: {
            autoplay: 1,
        },
    };

    // Fonction pour mettre en pause la video au chargement
    const _onReady = (event) => {
        event.target.pauseVideo();
    };


    return (

        <div className='player'>
            <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
        </div>

    )
};

Player.propTypes = {
    videoId: PropTypes.string,
};

export default Player;