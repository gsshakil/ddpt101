import React from 'react';

import ConnectionCard from './ConnectionCard';


class MyConnections extends React.Component  {

    render (){

        return(
            <div className="my-connections">
               <div className="row">
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
               </div> 
            </div>
        );
    }    
};

export default MyConnections;



