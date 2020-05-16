import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {
    const [stuff, setStuff] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res => setStuff(res.data));
    }, [])

    const removeFromDom =playerId => {
        setStuff(stuff.filter(player => player._id != playerId))
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Player Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
            {stuff.map((player, idx) => {
                return (
                    <tr key={idx}>
                    <td>
                        {player.name}
                    </td>
                    <td>
                        {player.position}
                    </td>
                    <td>
                        <DeleteButton authorId={player._id} successCallback={()=>removeFromDom(player._id)}/>
                    </td>
                    </tr>
                )
            })}
            </table>
        </div>
    )
}