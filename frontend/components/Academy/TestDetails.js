import React from 'react';

const TestDetails = () => {
    return(
        <div className="course-card">
            <div className="course-image">
                <img src="https://via.placeholder.com/150" alt=""/>
            </div>
            <div className="content">
                <h3>Course Title</h3>
                <h5>Categury</h5>
                <hr/>
                <hr/>
                <h5>Price</h5>
                <button className="btn btn-outline-info">Join Course</button>
            </div>
        </div>
    );
}

export default TestDetails;