import React, { useEffect } from 'react'
import axios from 'axios'

const Dashboard = () => {

    useEffect(() => {
        axios
            .get('https://5d8947bcb2568e0014d87a57.mockapi.io/people')
            .then(res => {
                console.log(res)
            })
    }, [])
    return (
        <>
            <h1>imagine a grid here!</h1>
            <p></p>
        </>
    )
}

export default Dashboard