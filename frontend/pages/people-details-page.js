import React from 'react';
import Link from 'next/link';

import PeopleDetails from '../components/People/PeopleDetails';

class PeopleDetailsPage extends React.Component {
  render(){
    return(
      <div>
        <PeopleDetails></PeopleDetails>
      </div>
    );
  }
}

export default PeopleDetailsPage;
