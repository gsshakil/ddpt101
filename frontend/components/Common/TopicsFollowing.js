import React from 'react';

import TopicFollowingCard from './ToppicFollowingCard';


class TopicsFollowing extends React.Component  {

    render (){

        return(
            <div className="topics-following">
                <div className="row">
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                </div>
            </div>
        );
    }    
};

export default TopicsFollowing;

