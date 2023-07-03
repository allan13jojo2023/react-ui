import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import WeatherSearch from './WeatherSearch';
import WeatherTable from './WeatherTable';

function Weather() {
  const [weather, setWeather] = useState(null);
  const handleSearch = (city) => {
    axios.get(`http://127.0.0.1:5000/api/weather/search?city=${city}`)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Row>
        <Col>
          <WeatherSearch onSearch={handleSearch} />
        </Col>
      </Row>
      {weather && (
        <Row>
          <Col>
            <WeatherTable data={weather} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Weather;