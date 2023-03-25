import { useState, useEffect } from 'react';

const Pet = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/pets')
            .then((res) => res.json())
            .then((data) => setPets(data));
    }, []);

    return pets.map((p) => (
        <>
            <h1>Name: {p.name}</h1>
            <h2>Animal: {p.animal}</h2>
        </>
    ));
};

export default Pet;
