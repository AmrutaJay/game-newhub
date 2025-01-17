import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface Game{
    id:number;
    name:string
}


interface fetchGamesResponse {
    count:number;
    results: Game[]

}

const GameGrid = () => {
    const [games, setGames]= useState<Game[]>([]);
    const [errors, setErrors] = useState('');

useEffect(() => {

    apiClient.get<fetchGamesResponse>("/xgames")
    .then(res=>setGames(res.data.results))
    .catch(err=> setErrors(err.message))
} )

  return (
    <>
    {errors && <text>{errors}</text>}
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
}

export default GameGrid
