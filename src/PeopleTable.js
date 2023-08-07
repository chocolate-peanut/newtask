import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
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

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Height',
                accessor: 'height',
            },
            {
                Header: 'Mass',
                accessor: 'mass',
            },
            {
                Header: 'Hair Color',
                accessor: 'hair_color',
            },
            {
                Header: 'Skin Color',
                accessor: 'skin_color',
            },
            {
                Header: 'Eye Color',
                accessor: 'eye_color',
            },
            {
                Header: 'Birth Year',
                accessor: 'birth_year',
            },
            {
                Header: 'Gender',
                accessor: 'gender',
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: people });

    return (
        <table className="table table-bordered" {...getTableProps()}>

            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
            
        </table>
    );
};

export default PeopleTable;


// const PeopleTable = () => {
//     const [people, setPeople] = useState([]);

//     useEffect(() => { 
//         const fetchPeople = async () => {
//             try {
//                 const response = await axios.get('https://swapi.dev/api/people/');
//                 setPeople(response.data.results);
//             } catch (error) {
//                 console.error('Error fetching people:', error);
//             }
//         };

//         fetchPeople();
//     }, []);

//     return (
//         <table className="table table-bordered">
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Height</th>
//                     <th>Mass</th>
//                     <th>Hair Color</th>
//                     <th>Skin Color</th>
//                     <th>Eye Color</th>
//                     <th>Birth Year</th>
//                     <th>Gender</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {people.map((person) => (
//                     <tr key={person.url}>
//                         <td>{person.name}</td>
//                         <td>{person.height}</td>
//                         <td>{person.mass}</td>
//                         <td>{person.hair_color}</td>
//                         <td>{person.skin_color}</td>
//                         <td>{person.eye_color}</td>
//                         <td>{person.birth_year}</td>
//                         <td>{person.gender}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };

// export default PeopleTable;