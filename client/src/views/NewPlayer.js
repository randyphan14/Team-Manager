import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import PlayerForm from '../components/PlayerForm'

export default props => {
    return (
        <div>
            <h2>Manage Players | <Link to= {"/status/game/1"}>Manage Player Status</Link></h2>
            <hr/>
            <h1><Link to={"/players/list"}>List</Link> | Add Player</h1>
            <hr/>
            <h3>Add Player</h3>
            {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
            <PlayerForm initialName="" initialPosition=""/>
            {/* <PlayerForm onSubmitProp={createPlayer} initialName="" initialPosition=""/> */}
        </div>
    )
}
