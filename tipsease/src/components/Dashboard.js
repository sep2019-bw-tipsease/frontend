import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getWorkers } from './actions'


const Dashboard = ({ getWorkers }) => {


    useEffect(() => {
        getWorkers()
    }, [getWorkers])

    return (
        <>
            <h1>imagine a grid here!</h1>
            <p></p>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state, 'dashboard state')
    return {
        workers: state.workers
    }
}

export default connect(
    mapStateToProps,
    { getWorkers }
)(Dashboard)