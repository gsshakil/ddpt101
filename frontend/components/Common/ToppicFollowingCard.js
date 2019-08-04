import React from 'react';
import Link from 'next/link';


class TopicFollowingCard extends React.Component  {

    render (){

        return(
            <div className="my-connections">
                <div className="topic-following-card">
                    <div className="content">
                        <div className="avatar">
                            <img src="https://via.placeholder.com/150" alt=""/>
                        </div>
                        <div className="user-info">
                            <Link href="/people-details"><a><h3 className="name">Architecture</h3></a></Link>
                        </div>
                    </div>
                    <div className="button-group">
                        <ul>
                            <button className="btn btn-outline-info">Unfollow</button>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }    
};

export default TopicFollowingCard;

