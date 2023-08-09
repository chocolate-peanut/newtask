import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import axios from "axios";

const PeopleTable = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/people/");
        setPeople(response.data.results);
      } catch (error) {
        console.error("Error fetching people:", error);
      }
    };

    fetchPeople();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Height",
        accessor: "height",
      },
      {
        Header: "Mass",
        accessor: "mass",
      },
      {
        Header: "Hair Color",
        accessor: "hair_color",
      },
      {
        Header: "Skin Color",
        accessor: "skin_color",
      },
      {
        Header: "Eye Color",
        accessor: "eye_color",
      },
      {
        Header: "Birth Year",
        accessor: "birth_year",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: people });

  return (
    <div className="main-card mb-3 card">
      <div className="card-body">
        <table
          className="table table-hover table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeopleTable;
