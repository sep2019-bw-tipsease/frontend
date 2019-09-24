import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getWorkers } from './actions'


const Dashboard = ({ getWorkers, workers }) => {
    console.log(workers)


    useEffect(() => {
        getWorkers()
    }, [getWorkers])

    return (
        <div>
            <h1>imagine a grid here!</h1>
            {workers.map(w => {
                console.log(w)
            })}

        </div>
    )
}

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