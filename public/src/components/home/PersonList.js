import React, {useState, useEffect} from 'react';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5001/fir-express-hosting-test/us-central1";

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
                <div>
                    <h1>{person.lname}, {person.fname}</h1>
                    <p>Age: {person.age}</p>
                </div>
            ))}
        </>
    )
}

export default PersonList
