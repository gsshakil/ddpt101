import React from 'react';
import Link from 'next/link';


const TestCard = () => {
    return(
        <div className="test-card">
            <div className="test-image">
                <img src="https://via.placeholder.com/150" alt=""/>
            </div>
            <div className="content">
                <Link href="/test-details"><a><h3>Test Title</h3></a></Link>
                <h5>Categury</h5>
                <hr/>
                <hr/>
                <h5>Price</h5>
                <button className="btn btn-outline-info">Taje Test</button>
            </div>
        </div>
    );
}

export default TestCard;