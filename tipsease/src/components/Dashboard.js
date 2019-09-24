import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getWorkers } from './actions';
import ServerPage from './ServerPage';



const Dashboard = ({ getWorkers, workers }) => {
    console.log(workers);

    useEffect(() => {
        getWorkers()
    }, [getWorkers])

    return (
        <div>
        {workers.map(w => {
            console.log(w)
            return <ServerPage key={w.id} w={w} />

        })}

    </div>
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