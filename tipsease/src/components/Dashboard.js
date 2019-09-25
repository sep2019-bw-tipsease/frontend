import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWorkers } from './actions';
import ServerPage from './ServerPage';
import logo from '../images/logo.png';



const Dashboard = ({ getWorkers, workers }) => {
    // console.log(workers);

    useEffect(() => {
        getWorkers()
    }, [getWorkers])

    return (
        <div className="containerWrapper">
             <img className="DashLogo" src={logo} alt='logo'/>
            <div className="cardContainerAll">
                {workers.map(w => {
                    // console.log(w)
                    return <ServerPage key={w.id} w={w} />
    
                })}

            </div>  
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