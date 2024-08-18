import { useState } from "react";
import axios from 'axios';
import './DateSoundtrack.css'
import searchIcon from '../../assets/searchIcon/searchIcon.png'
import ter3 from '../../assets/ternurines-pics/ter3.png'

export const DateSoundtrack = () => {
    const [song, setSong] = useState('');
    const [result, setResult] = useState(null); // Single result

    const getSpotifyToken = async () => {
        const response = await axios.post('https://accounts.spotify.com/api/token', 
            new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
                client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
            }), 
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        return response.data.access_token;
    };

    const handleSearch = async () => {
        try {
            const token = await getSpotifyToken();
            const spotifyResponse = await axios.get('https://api.spotify.com/v1/search', {
                params: {
                    q: song,
                    type: 'track'
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const tracks = spotifyResponse.data.tracks.items;
            if (tracks.length > 0) {
                const track = tracks[0];
                const trackName = track.name;
                const artist = track.artists[0].name;
                const imageUrl = track.album.images[1].url; 

                setResult({
                    name: trackName,
                    artist: artist,
                    image: imageUrl
                });
            } else {
                setResult(null); 
            }

        } catch (error) {
            console.error('Error trying to fetch data!', error);
            setResult(null);
        }
    };

    return (
        <div className="search-Card-soundtrack">
            <h2>Soundtrack de nuestra cita 🎶</h2>
            <div className="search-Card-soundtrack-bar">
            <input 
                type="text" 
                placeholder="¿Qué canción estás pensando?" 
                value={song} 
                onChange={(e) => setSong(e.target.value)} 
            />
            <button onClick={handleSearch}><img src={searchIcon} alt="icon for searching button"></img></button>
            </div>
            <div>
                {result ? (
                    <div className="track-card">
                        <img src={result.image} alt={result.name} />
                        <p>{result.name}</p>
                        <p>{result.artist}</p>
                    </div>
                ) : (
                    <p>*suena de fondo*</p>
                )}
            </div>
            <div className="goodbye-section">
                <h2 className="goodbye-text">¡Muchas gracias por aceptar!</h2>
                <img src={ter3} alt="cow plush" className="goodbye-img"></img>
            </div>
        </div>
    );
};
