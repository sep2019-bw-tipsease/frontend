import React, { useEffect, useState } from 'react';
import { getOneWorker, addTipToServer } from './actions'
import { connect } from 'react-redux';
import styled from 'styled-components'
import logo from '../images/logo.png'
import { Button } from 'reactstrap'
import { axiosWithAuth } from './axiosWithAuth';


const ServerPage = props => {

  const { getOneWorker, workers } = props
  const id = props.match.params.id
  useEffect(() => {
    getOneWorker(id)
  }, [getOneWorker, id])

  const [editTip, setEditTip] = useState({
    tip: 0
  })



  const handleChange = e => {
    setEditTip({
      ...editTip,
      [e.target.name]: Number.parseInt(e.target.value)
    })

    console.log(editTip, 'updated tip')

  }
  const addTip = e => {

    // console.log(e, 'inside add tip func')
    e.preventDefault()
    axiosWithAuth()
      .put(`/workers/${id}/tips`, editTip)
      .then(res => {
        console.log(res)
        getOneWorker(id)
      })

      .catch(err => console.log(err, 'error on post tip'))

    // alert()
  }
  return (
    <StyledServer>
      <img src={logo} alt='tipseaselogo' />
      <div className='worker-wrap'>
        <div className='header-cont'>
          <h4>{workers.first_name} {workers.last_name}</h4>
        </div>
        <p>username: <br></br>{workers.username}</p>
        <p>company:  <br></br>{workers.company}</p>
        <p>catchphrase:  <br></br>{workers.tagline}</p>
        <p>total tips: {workers.tip_total}</p>
        <form onSubmit={addTip}>
          <label>add a tip</label><br></br>
          $ <input type='text' name='tip' value={editTip.tip} onChange={handleChange} selected='selected' /><br></br>
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
      padding: 2rem 3rem;
      .header-cont {
        text-align: center;
      }
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