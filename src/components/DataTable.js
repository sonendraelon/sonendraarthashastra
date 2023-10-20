import React from 'react';
import data from '../dummyData.json';

const DataTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Year</th>
          <th>Medals</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.year}</td>
            <td>{item.medals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;