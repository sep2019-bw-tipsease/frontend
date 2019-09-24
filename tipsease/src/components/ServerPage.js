import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

const ServerPage = (props) => {
    const { username, species, status} = props.server;
    return (
        <CardDeck className="ServerCards ">
          <Card>
            <CardBody>
              <CardTitle>{username}</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </CardDeck>
      );
}

export default ServerPage