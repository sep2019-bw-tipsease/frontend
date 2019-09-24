
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getWorkers } from './actions'
import ServerPage from './ServerPage';

const Dashboard = ({ getWorkers }) => {

    const [servers, setServers] = useState([]);
    
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
        <div className="server-page">
          {servers.map(server => {
            console.log(server);
            return <ServerPage key={server.id} server={server} />;
    })}
        </div>
      );
    };

const mapStateToProps = state => {
    console.log(state, 'dashboard state')
}

export default connect(
    mapStateToProps,
    { getWorkers }
)(Dashboard)