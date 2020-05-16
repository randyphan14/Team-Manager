import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const green = '#39D1B4';
export default props => {
    const { initialName, initialPosition, onSubmitProp } = props;
    const [name, setName] = useState(initialName); 
    const [position, setPosition] = useState(initialPosition); 

    const [player, setPlayer] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res =>{ 
                setPlayer(res.data);
                setLoaded(true);
            });
        }, [])
        
        const createPlayer = person => {
            axios.post('http://localhost:8000/api/player', person)
            .then(res=>{
                setPlayer([...player, res.data]);
                navigate('/players/list');
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        createPlayer({name, position});
    }
    
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Player Name:</label><br/>
                <input 
                    type="text"
                    name="name" value={name}
                    onChange={(e) => { setName(e.target.value) }}/>
            </p>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Preferred Position:</label><br/>
                <input 
                    type="text"
                    name="position" value={position}
                    onChange={(e) => { setPosition(e.target.value) }}/>
            </p>
            {name.length >= 2?<input style={{background: green}} type="submit" value="Add"/>:<button>Add</button>}
        </form>
    )
}
