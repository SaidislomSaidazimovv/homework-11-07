import React from 'react'
import { CLIENT_ID } from "../hooks/useEnv";

const Login = () => {
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played`;
  
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <a className='w-[200px] text-center hover:opacity-50 duration-300 p-2 rounded-md bg-green-600 text-white font-semibold text-[20px]' href={AUTH_URL}>Login to Spotify</a>
    </div>
  )
}

export default Login