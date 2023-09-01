import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    topic: '',
    sector: '',
    region: '',
    intensity:'',
    likelihood:'',
    title:'',
    relevance:''
    // Add other filters
  });

  useEffect(() => {
    axios.get('http://localhost:8000/getData') // Replace with your API endpoint
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    console.log('User Input Filters:', filters);
  
    const filtered = data.filter(item => {
      const meetstopicCondition = !filters.topic || (item.topic && item.topic.includes(filters.topic));
    
  
      console.log('Data Item:', item);
      console.log('Meets Conditions:', meetstopicCondition);
  
      return   meetstopicCondition ;
    });
  
    console.log('Filtered Data:', filtered);
    setFilteredData(filtered);
  }, [data, filters]);
    
 
  const handletopicChange = event => {
    const { value } = event.target;
    setFilters(prevFilters => ({ ...prevFilters, topic: value }));
  };

  return (
    <div>
      <div>
        <label>Filter Topic: </label>
        <input
          type="text"
          value={filters.topic}
          onChange={handletopicChange}
        />
      </div>
      {/* Add other filter components */}
      <table>
        <thead>
          <tr>
            <th>Added</th>
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
          {filteredData.map(item => (
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
      </table>
    </div>
  );
};

export default Dashboard;
