import React, { useEffect } from 'react';
import { getOneWorker } from './actions'
import { connect } from 'react-redux';
import styled from 'styled-components'

const ServerPage = props => {
  const { getOneWorker, workers } = props

  const id = props.match.params.id

  useEffect(() => {
    getOneWorker(id)
  }, [getOneWorker, id])

  return (

    <StyledServer>
      <div className='worker-wrap'>
        <h4>{workers.first_name} {workers.last_name}</h4>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </StyledServer>
  );
};

const mapStateToProps = state => {
  // console.log(state)
  return {
    workers: state.workers
  }
}

export default connect(
  mapStateToProps,
  { getOneWorker }
)(ServerPage);

const StyledServer = styled.div`
    height: 100vh;
    .worker-wrap {
      border: 1px solid red;
      background: white;
    }
`;