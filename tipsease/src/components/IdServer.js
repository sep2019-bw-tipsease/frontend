// import React, { useEffect } from 'react'
// import { connect } from 'react-redux';
// import { getOneWorker } from './actions';


// const IdServer = props => {

//     console.log(props)

//     const id = props.match.params.id


//     useEffect(() => {
//         getOneWorker(id)
//     }, [getOneWorker])

//     return (
//         <div>
//             <h1>one server</h1>

//         </div>
//     )
// }

// export default IdServer;
// // const mapStateToProps = state => {
// //     // console.log(state, 'id server state')
// //     return {
// //         workers: state.workers
// //     }
// // }

// // export default connect(
// //     mapStateToProps,
// //     { getOneWorker }
// // )(IdServer);