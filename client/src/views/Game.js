import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import PlayerStatusList from '../components/PlayerStatusList';

export default props => {
    const { id } = props;
    const [player, setPlayer] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res =>{ 
                setPlayer(res.data)
                setLoaded(true);
            });
    }, [player])


    return (
        <div>
            <h2><Link to ={"/players/list"}>Manage Players</Link> | Manage Player Status</h2>
            <hr/>
            <h1>Player Status - Game {id}</h1>
            <h3><Link to ={"/status/game/1"}>Game 1</Link> | <Link to ={"/status/game/2"}>Game 2</Link> | <Link to ={"/status/game/3"}>Game 3</Link></h3>
            {loaded && <PlayerStatusList player={player} gameNum={id}/>}
        
        </div>
    )
}
