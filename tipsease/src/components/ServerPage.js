import React, { useEffect, useState } from 'react';
import { getOneWorker } from './actions'
import { connect } from 'react-redux';
import styled from 'styled-components'
import logo from '../images/logo.png'
import { Button } from 'reactstrap'


const ServerPage = props => {

  const { getOneWorker, workers } = props
  const id = props.match.params.id
  useEffect(() => {
    getOneWorker(id)
  }, [getOneWorker, id])

  const [tip, setTip] = useState({
    tip: ''
  })

  const handleChange = e => {
    setTip({
      ...tip,
      [e.target.name]: e.target.value
    })
  }

  const addTip = e => {
    console.log(e, 'inside add tip func')
    e.preventDefault();
  }


  return (

    <StyledServer>
      <img src={logo} alt='tipseaselogo' />
      <div className='worker-wrap'>
        <h4>{workers.first_name} {workers.last_name}</h4>
        <p>username: <br></br>{workers.username}</p>
        <p>company:  <br></br>{workers.company}</p>
        <p>catchphrase:  <br></br>{workers.tagline}</p>
        <form onSubmit={addTip}>
          <label>add a tip</label><br></br>
          $ <input type='number' name='tip' placeholder='00.00' value={tip.tip} onChange={handleChange} /><br></br>
          <div className='button-cont'><Button>Add</Button></div>
        </form>
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
    /* height: 100vh; */
    display:flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 25rem;
    }
    .worker-wrap {
     
      border-radius: 10px;
      color: #EAE7ED;
      background: #B793E6;
      margin: 0 5rem 5rem 5rem;
      padding: 2rem 5rem;
      form {
        text-align: center;
          input {
            text-align: right;
            border-radius: 5px;
            border-style: none;
            padding-right:1rem;
          }

          .button-cont {
            display: flex;
            justify-content: center;
            margin:1rem;
              button {
                width: 8rem;
                background: #6E588A;

             }
          }
      }
    }
`;