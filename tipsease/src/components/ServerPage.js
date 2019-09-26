import React, { useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { getOneWorker } from './actions'
import { connect } from 'react-redux';


const ServerPage = props => {
  const { getOneWorker, workers } = props
  // const { username, first_name, last_name, image, tagline, time, tip_total, id } = props.w;
  // console.log(props)
  const id = props.match.params.id
  console.log(workers, 'serverpage')

  useEffect(() => {
    getOneWorker(id)
  }, [getOneWorker])


  return (
    // <div className="cardContainer">
    //   {/* <Card className="card">
    //     <CardBody>
    //       <CardImg className="Img" src={image} alt="Card image cap" />
    //       <CardTitle>Username: {username}</CardTitle>
    //       <CardTitle>Name: {first_name}</CardTitle>
    //       <CardSubtitle>Last Name: {last_name}</CardSubtitle>
    //       <CardText>Quote: "{tagline}"</CardText>
    //       <CardSubtitle>Time: {time}</CardSubtitle>
    //       <CardText>Total Tip: {tip_total}</CardText>
    //       <Link to={`/dashboard/${id}`}><Button>Tip Me!</Button></Link>
    //     </CardBody>
    //   </Card> */}
    // </div>
    <div>
      <h1>serverpage</h1>
      <div>
        {/* {workers.flat(w => {
          console.log(w)
          return (
            <p>hi</p>
          )
        })} */}
        {/* {workers.map(w => {
          console.log(w)
        })

          .filter(i => {
            return i.id === props.match.params.id
          })
        } */}
        <h1>{workers.username}</h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    workers: state.workers
  }
}

export default connect(
  mapStateToProps,
  { getOneWorker }
)(ServerPage);