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

    const id = workers.id

    useEffect(() => {
        getWorkers()
        getOneWorker(id)
    }, [getWorkers, getOneWorker, id])

    return (
        <div>
            <h1>worker db</h1>

        </div>
    )
}

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