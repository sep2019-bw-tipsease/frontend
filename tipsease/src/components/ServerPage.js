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

    <div>
      <h1>serverpage</h1>
      <div>

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