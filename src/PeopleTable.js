import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PeopleTable = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/people/');
                setPeople(response.data.results);
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        };

        fetchPeople();
    }, []);

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Hair Color</th>
                    <th>Skin Color</th>
                    <th>Eye Color</th>
                    <th>Birth Year</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {people.map((person) => (
                    <tr key={person.url}>
                        <td>{person.name}</td>
                        <td>{person.height}</td>
                        <td>{person.mass}</td>
                        <td>{person.hair_color}</td>
                        <td>{person.skin_color}</td>
                        <td>{person.eye_color}</td>
                        <td>{person.birth_year}</td>
                        <td>{person.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PeopleTable;