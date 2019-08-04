import React from 'react';
import Link from 'next/link';

class ConnectionCard extends React.Component  {
    render(){
        return(
            <div className="connection-card">
                <div className="content">
                    <div className="avatar">
                        <img src="https://via.placeholder.com/150" alt=""/>
                    </div>
                    <div className="user-info m-b-xs">
                        <Link href="/people-details"><a><h3 className="name">Jhon Doe</h3></a></Link>
                        <p className="occupation">Architect, Serial Enterprenur</p>
                        <p className="location">Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="button-group">
                    <button className="btn btn-outline-info">Disconnect</button>
                </div>
            </div>
        );
    }
}

export default ConnectionCard;