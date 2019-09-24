import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getWorkers } from './actions'

const Dashboard = ({ getWorkers }) => {

    // useEffect(() => {
    //     axios
    //         .get('https://5d8947bcb2568e0014d87a57.mockapi.io/people')
    //         .then(res => {
    //             console.log(res)
    //         })
    // }, [])
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
}

export default connect(
    mapStateToProps,
    { getWorkers }
)(Dashboard)