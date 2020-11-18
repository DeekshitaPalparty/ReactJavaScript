import React, {useMemo, useState, useEffect} from 'react';
// import {Checkbox} from '@material-ui/core';
import axios from 'axios';

import Table from './table';
import './App.css';

const Genres = ({values}) => {
  return (
    <>
      {values.map((genre, idx) => {
        return (
          <span key={idx} className='badge'>
            {genre}
          </span>
        );
      })}
    </>
  );
};

function App() {
  const [data, setData] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: 'Customer Information',
        columns: [
          {
            Header: 'Customer',
             accessor: 'userId',
          },
          {
            Header: 'Id',
             accessor: 'id',
          },
          {
            Header: 'Actions',
            id: 'delete',
            // accessor: 'show.delete',

            Cell: (tableProps) => (
              <span
                style={{
                  cursor: 'pointer',
                  color: 'black',
                  textDecoration: 'underline',
                }}
                onClick={(index) => {
                  // ES6 Syntax use the rvalue if your data is an array.
                  const dataCopy = [...data];
                  // It should not matter what you name tableProps. It made the most sense to me.
                  //   dataCopy.splice(tableProps.row.index, 5);
                  //   alert("deleted"+tableProps.row.index+"row");
                  //   console.log(tableProps.row.index);
                  dataCopy.filter(
                    (e) => tableProps.row.index !== e.tableProps.row.index,
                  );
                  setData(dataCopy);
                }}>
                Delete
              </span>
            ),
          },
        ],
      },
    
    ],
    [],
  );

  useEffect(() => {
    (async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/posts');
      setData(result.data);
    })();
  }, []);

  return (
    <div className='App'>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
