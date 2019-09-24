import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import ServerPage from "./ServerPage"; 

const Dashboard = () => {
    const [servers, setServers] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://5d8947bcb2568e0014d87a57.mockapi.io/people')
            .then(res => {
                console.log(res);
                setServers(res.data);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            });
    }, [])
    
    return (
        <div className="server-page">
          {servers.map(server => {
            console.log(server);
            return <ServerPage key={server.id} server={server} />;
    })}
        </div>
      );
    };

export default Dashboard