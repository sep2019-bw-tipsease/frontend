import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { Link } from 'react-router-dom'

import logo from '../images/logo.png';


const ServerPage = (props) => {
  const { username, first_name, last_name, image, tagline, time, tip_total } = props.w;
  return (
    <div className="cardContainer">
      <Card className="card">
        <CardBody>
          <CardImg className="Img" src={image} alt="Card image cap" />
          <CardTitle>Username: {username}</CardTitle>
          <CardTitle>Name: {first_name}</CardTitle>
          <CardSubtitle>Last Name: {last_name}</CardSubtitle>
          <CardText>Quote: "{tagline}"</CardText>
          <CardSubtitle>Time: {time}</CardSubtitle>
          <CardText>Total Tip: {tip_total}</CardText>
          <Link to='idserver'><Button>Tip Me!</Button></Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default ServerPage;