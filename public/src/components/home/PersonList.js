import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PersonList = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('/api/data').then(res => {
            console.log(res);
            console.log(res.data);
            setPeople(res.data);
        })
    }, [])

    return (
        <>
            {people.map(person => (
                <div key={person._id}>
                    <h1>{person.lname}, {person.fname}</h1>
                    <p>Age: {person.age}</p>
                </div>
            ))}
        </>
    )
}

export default PersonList
