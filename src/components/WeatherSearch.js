import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function WeatherSearch({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control name="city" type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default WeatherSearch;