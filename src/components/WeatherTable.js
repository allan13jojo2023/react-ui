import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

function WeatherTable({ data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Feels Like</th>
          <th>Weather</th>
          <th>Wind Speed</th>
          <th>Wind Direction</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row[0]}>
            <td>{row[1]}</td>
            <td>{row[2]}°C</td>
            <td>{row[3]}°C</td>
            <td>{row[4]}</td>
            <td>{row[5]} km/h</td>
            <td>{row[6]}</td>
            <td>{row[7]}%</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default WeatherTable;
