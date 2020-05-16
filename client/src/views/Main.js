import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';

export default () => {
    const [player, setPlayer] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res =>{ 
                setPlayer(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = playerId => {
        setPlayer(player.filter(author => author._id != playerId));
    }

    return (
        <div>
            <h2>Manage Players | <Link to ={"/status/game/1"}>Manage Player Status</Link></h2>
            <hr/>
            <h1>List | <Link to={"/players/addplayer"}>Add Player</Link></h1>
            {loaded && <PlayerList player={player} removeFromDom={removeFromDom}/>}
        </div>
    )
}
