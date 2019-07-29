import React from 'react';
import Link from 'next/link';

class PeopleCard extends React.Component  {
    render (){        
        return(
            <div className="people-card">
                <div className="content">
                    <div className="avatar">
                        <img src="https://via.placeholder.com/150" alt=""/>
                    </div>
                    <div className="user-info">
                        <Link href="/people-details"><a><h2 className="name">Jhon Doe</h2></a></Link>
                        <p className="occupation">Architect, Serial Enterprenur</p>
                        <p className="location">Dhaka, Bangladesh</p>
                    </div>
                    <div className="bio">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
                    </div>
                </div>
                <div className="button-group">
                    <ul>
                        <li><button className="btn btn-outline-info btn-lg">Connect</button></li>
                        <li><button className="btn btn-outline-success btn-lg">Message</button></li>
                    </ul>
                </div>
            </div>
        );
    }    
};

export default PeopleCard;

