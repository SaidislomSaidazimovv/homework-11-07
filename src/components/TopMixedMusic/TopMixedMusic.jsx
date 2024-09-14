import React, { useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { Context } from "../../context/CodeContext";
import {CLIENT_ID} from "../../hooks/useEnv"
import { useAuth } from './../../hooks/useAuth';

const TopMixedMusic = () => {
  const { code } = useContext(Context);
  const accessToken = useAuth(code);
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID
  });

  useEffect(() => {
    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
    }
  }, [accessToken]);

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
      spotifyApi.searchTracks("Doston Ergashev").then((res) => {
        setTracks(
          res.body.tracks.items.map((track) => {
            const data = {
              img: track.album.images[0].url,
              artist_name: track.artists[0].name,
              track_name: track.name,
              uri: track.artists[0],
            };
            return data;
          })
        );
      });
  }, [accessToken]);

  return (
    <div className="flex gap-5">
        {tracks.map((track, index) => (
          <div className="min-w-[224px] card-bg p-5 rounded-[8px]" key={index}>
            <img className="mb-[25px] rounded-[8px]" src={track.img} alt="track-img" width={"182"} height={"182"} />
            <div>
                <h3 className="text-white font-bold text-[20px] line-clamp-1 mb-2">{track.track_name}</h3>
                <p className="text-white">{track.artist_name}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TopMixedMusic;
