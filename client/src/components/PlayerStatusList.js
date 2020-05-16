import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { Button } from '@material-ui/core';

const red = '#ffcccb'
const green = '#39D1B4';
const yellow = '#FFD712';

export default props => {
    const { gameNum } = props;
    const [stuff, setStuff] = useState([]);
    const [game1, setGame1] = useState(); 
    const [game2, setGame2] = useState(); 
    const [game3, setGame3] = useState(); 

    //gets all players to print for mapping
    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res => setStuff(res.data));
    }, [stuff])

    
    const updatePlayer = (e, playerId) => {
        e.preventDefault();
        if (gameNum == 1) {
            axios.put('http://localhost:8000/api/player/' + playerId, {game1})
            .then(res => console.log(res));
        }
        
        if (gameNum == 2) {
            axios.put('http://localhost:8000/api/player/' + playerId, {game2})
                    .then(res => console.log(res));
        }
        
        if (gameNum == 3) {
            axios.put('http://localhost:8000/api/player/' + playerId, {game3})
                    .then(res => console.log(res));
        }
    }

    const setGame = (value) => {
        if (gameNum == 1) {
            setGame1(value);
        }
        
        if (gameNum == 2) {
            setGame2(value);
        }
        
        if (gameNum == 3) {
            setGame3(value);
        }
    }

    //orginaly way how I did setGame
    const statusForm = (player) => {
        if (gameNum == 1) {
            return(
                <div>
                    <form onSubmit={e=>{updatePlayer(e, player._id)}} >
                        <button type="submit" name="playing" value="Playing" onClick={(e) => {setGame1(e.target.value)}}>Playing</button>
                        <button type="submit" name="notPlaying" value="Not Playing" onClick={(e) => {setGame1(e.target.value)}}>Not Playing</button>
                        <button type="submit" name="undecided"value = "Undecided" onClick={(e) => {setGame1(e.target.value)}}>Undecided</button>
                    </form>
                </div>
            )
        }
        
        if (gameNum == 2) {
            return(
                <div>
                    <form onSubmit={e=>{updatePlayer(e, player._id)}} >
                        <button type="submit" name="playing" value="Playing" onClick={(e) => {setGame2(e.target.value)}}>Playing</button>
                        <button type="submit" name="notPlaying" value="Not Playing" onClick={(e) => {setGame2(e.target.value)}}>Not Playing</button>
                        <button type="submit" name="undecided"value = "Undecided" onClick={(e) => {setGame2(e.target.value)}}>Undecided</button>
                    </form>
                </div>
            )
        }
        
        if (gameNum == 3) {
            return(
                <div>
                    <form onSubmit={e=>{updatePlayer(e, player._id)}} >
                        <button type="submit" name="playing" value="Playing" onClick={(e) => {setGame3(e.target.value)}}>Playing</button>
                        <button type="submit" name="notPlaying" value="Not Playing" onClick={(e) => {setGame3(e.target.value)}}>Not Playing</button>
                        <button type="submit" name="undecided"value = "Undecided" onClick={(e) => {setGame3(e.target.value)}}>Undecided</button>
                    </form>
                </div>
            )
        }
    }
    
    //will delete, only using to print player's current game status
    const callStatus = (player) => {
        if (gameNum == 1) {
            return(<div>{player.game1}</div>)
        }
        
        if (gameNum == 2) {
            return(<div>{player.game2}</div>)
        }
        
        if (gameNum == 3) {
            return(<div>{player.game3}</div>)
        }
    }

    const getColor = (player) => {
        if (gameNum == 1) {
            if (player.game1 == "Playing") {
                //color green
                return (green)
            }
            if (player.game1 == "Not Playing") {
                //color green
                return (red)
            }
            if (player.game1 == "Undecided") {
                //color yellow
                return (yellow)
            }
            return;
        }
        if (gameNum == 2) {
            if (player.game2 == "Playing") {
                //color green
                return (green)
            }
            if (player.game2 == "Not Playing") {
                //color green
                return (red)
            }
            if (player.game2 == "Undecided") {
                //color yellow
                return (yellow)
            }
            return;
        }
        if (gameNum == 3) {
            if (player.game3 == "Playing") {
                //color green
                return (green)
            }
            if (player.game3 == "Not Playing") {
                //color green
                return (red)
            }
            if (player.game3 == "Undecided") {
                //color yellow
                return (yellow)
            }
            return;
        }
    }

    const color = (player) => {
        if (gameNum == 1) {
            if (player.game1 == "Playing") {
                //color green
                return (green)
            } else {
                return;
            }
        }
        
        if (gameNum == 2) {
            if (player.game2 == "Playing") {
                //color green
                return (green)
            } else {
                return;
            }
        }
        
        if (gameNum == 3) {
            if (player.game3 == "Playing") {
                //color green
                return (green)
            } else {
                return;
            }
        }
    }

    const color1 = (player) => {
        if (gameNum == 1) {
            if (player.game1 == "Not Playing") {
                //color green
                return (red)
            } else {
                return;
            }
        }

        if (gameNum == 2) {
            if (player.game2 == "Not Playing") {
                //color red
                return (red)
            } else {
                return;
            }
        }

        if (gameNum == 3) {
            if (player.game3 == "Not Playing") {
                //color red
                return (red)
            } else {
                return;
            }
        }
    }

    const color2 = (player) => {
        if (gameNum == 1) {
            if (player.game1 == "Undecided") {
                //color yellow
                return (yellow)
            } else {
                return;
            }
        }

        if (gameNum == 2) {
            if (player.game2 == "Undecided") {
                //color yellow
                return (yellow)
            } else {
                return;
            }
        }

        if (gameNum == 3) {
            if (player.game3 == "Undecided") {
                //color yellow
                return (yellow)
            } else {
                return;
            }
        }
    }

    const getGame = (player) => {
        if (gameNum == 1) {
            return player.game1;
        }
        
        if (gameNum == 2) {
            return player.game2;
        }
        
        if (gameNum == 3) {
            return player.game3;
        }
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                {stuff.map((player, idx) => {
                    return (
                        <tr key={idx}>
                            <td>
                                <Link to={"/" + player._id + "/edit"}>
                                    {player.name}
                                </Link> 
                            </td>
                            <td>
                                <form onSubmit={e=>{updatePlayer(e, player._id)}} >
                                    {getGame(player) == "Playing"?<button style={{background: green}}>Playing</button>:<button type="submit" name="Playing" value="Playing" onClick={(e) => {setGame(e.target.value)}}>Playing</button>}
                                    {getGame(player) == "Not Playing"?<button style={{background: red}}>Not Playing</button>:<button type="submit" name="Playing" value="Not Playing" onClick={(e) => {setGame(e.target.value)}}>Not Playing</button>}
                                    {getGame(player) == "Undecided"?<button style={{background: yellow}}>Undecided</button>:<button type="submit" name="Playing" value="Undecided" onClick={(e) => {setGame(e.target.value)}}>Undecided</button>}
                                </form>
                                
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}