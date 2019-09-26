import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWorkers } from './actions';
import logo from '../images/logo.png';
import styled from 'styled-components'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
const Dashboard = ({ getWorkers, workers }) => {
    // console.log(workers);
    useEffect(() => {
        getWorkers()
    }, [getWorkers])

    return (

        <StyledDash className="containerWrapper">

            <img src={logo} alt='logo' />
            <h2>Your tipsease workers</h2>
            <div className='server-wrap'>
                {workers.map(w => {
                    return (
                        <div className='server-card'>
                            <div className='header-cont'>
                                <h4>{w.username}</h4>
                            </div>
                            <p>{w.first_name} {w.last_name}</p>
                            <p>company: {w.company}</p>
                            <p>position: {w.job_title}</p>
                            <p>catchphrase: {w.tagline}</p>
                            <div className='button-cont'>
                                <Link to={`/dashboard/${w.id}`}><Button>tip me!</Button></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </StyledDash>


    )
}

const StyledDash = styled.div`

    img {
        width: 25rem;
        align-self: center;
    }
    .server-wrap {
        border: 1px solid red;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0 2rem;

        .server-card {
            border: 1px solid blue;
            width: 20rem;
            margin: 4rem;
            padding: 2rem;
            .header-cont {
                display: flex;
                justify-content: center;
            }
            .button-cont {
                display: flex;
                justify-content: center;
                    button {
                width: 8rem;
                background: #6E588A;
                }
            }
        }
    }
    
`;

const mapStateToProps = state => {
    // console.log(state, 'dashboard state')
    return {
        workers: state.workers
    }
}

export default connect(
    mapStateToProps,
    { getWorkers }
)(Dashboard)