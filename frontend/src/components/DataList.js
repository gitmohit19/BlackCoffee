import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const DataList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/getData') 
          .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching coffee data:', error);
      });
  }, []);

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Intensity</th>
            <th>Likelihood</th>
            <th>Relevance</th>
            <th>Sector</th>
            <th>Country</th>
            <th>Title</th>
            <th>Region</th>
            <th>Topic</th>

          </tr>
        </thead>
        <tbody>
        {data.map(item => (
            <tr key={item._id}>
              <td>{item.added}</td>
              <td>{item.intensity}</td>
              <td>{item.likelihood}</td>
              <td>{item.relevance}</td>
              <td>{item.sector}</td>
              <td>{item.country}</td>
              <td>{item.title}</td>
              <td>{item.region}</td>
              <td>{item.topic}</td>
            </tr>
          ))}

        </tbody>
      </Table>
  
  );
};

export default DataList;
