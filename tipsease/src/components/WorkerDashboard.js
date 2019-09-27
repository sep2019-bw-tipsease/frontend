import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWorkers } from './actions';
import logo from '../images/logo.png';
import styled from 'styled-components'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { getOneWorker } from './actions'



const WorkerDashboard = props => {


    const { getOneWorker, getWorkers, workers } = props
    console.log(props)

    const id = props.match.params.id


    useEffect(() => {
        // getWorkers()
        getOneWorker(id)
        // console.log("getting a SINGLE worker", getOneWorker(id))
    }, [getWorkers, getOneWorker, id])

    return (
        <StyledProfile>

            <img src={logo} />
            <div className='profile-wrap'>
                <div className='header-cont'>
                    <h3>My Profile</h3>
                    <h4>{props.workers.first_name} {props.workers.last_name}</h4>
                </div>
                <p>username:<br /> {props.workers.username}</p>
                <p>company: <br /> {props.workers.company}</p>
                <p>position: <br /> {props.workers.job_title}</p>
                <p>catchphrase: <br /> {props.workers.tagline}</p>
                <p>total tips: <br /> {props.workers.tip_total}</p>
            </div>

        </StyledProfile>
    )
}

const StyledProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 25rem;
    }
    .profile-wrap{
        border-radius: 10px;
        color: #EAE7ED;
        background: #B793E6;
        margin: 0 5rem 5rem 5rem;
        padding: 2rem 3rem;
        .header-cont {
            text-align: center;
        }
    }
`;

const mapStateToProps = state => {
    // console.log(state, 'worker dashboard state')
    return {
        workers: state.workers
    }
}

export default connect(
    mapStateToProps,
    { getWorkers, getOneWorker }
)(WorkerDashboard)