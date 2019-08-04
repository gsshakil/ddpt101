import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

import ProjectCard from '../Projects/ProjectCard';
import ProductCard from '../Products/ProductCard';
import JobCard from '../Jobs/JobCard';
import LearningPathCard from '../Academy/LearningPathCard';
import CourseCard from '../Academy/CourseCard';
import TestCard from '../Academy/TestCard';
import AppCard from '../Apps/AppCard';
import MyConnections from '../Common/MyConnections';
import TopicsFollowing from '../Common/TopicsFollowing';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  });

class PeopleDetails extends React.Component {

    state = {
        value: 0,
        valueSecondaryTabsNetwork: 0,
        valueSeacondaryTabsJobs: 0,
        valueSeacondaryTabsAcademy: 0,
    };
    
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeNetwork = (event, valueSecondaryTabsNetwork) => {
        this.setState({ valueSecondaryTabsNetwork });
    };

    handleChangeJobs = (event, valueSeacondaryTabsJobs) => {
        this.setState({ valueSeacondaryTabsJobs });
    };

    handleChangeAcadmey = (event, valueSeacondaryTabsAcademy) => {
        this.setState({ valueSeacondaryTabsAcademy });
    };
    
    render(){

        let sizes = [{ columns: 4, gutter: 10 }, 
            { mq: '360px', columns: 1, gutter: 0 }, 
            { mq: '768px', columns: 3, gutter: 10 }, 
            { mq: '1024px', columns: 4, gutter: 10 }
        ]   

        const { classes } = this.props;
        const { value, valueSecondaryTabsNetwork, valueSeacondaryTabsJobs, valueSeacondaryTabsAcademy } = this.state;


        const headerBgStyle={
            background: 'url{intro}'
        }

        return(
            <div className="people-details">
                <div className="top-banner">
                    <div className="profile-card">
                        <div className="profile-image">
                            <img src="https://via.placeholder.com/150" alt="profile image"/>
                        </div>
                        <div className="nameNbuttons">
                            <div className="name">
                                <h1>Jhon Doe</h1>
                                <p>Architect, Serial Enterprenur</p>
                                <p>Dhaka, Bangladesh</p>
                            </div>
                            <div className="buttons">
                                <button className="btn btn-outline-info m-r-xs">Connect</button>                    
                                <button className="btn btn-outline-success">Message</button>                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="people-details-b">
                    <div className="people-passport">
                        <div className="bio">
                            <h3>About</h3>
                            <hr/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum cumque at provident repudiandae magni fuga doloribus culpa explicabo dolorum eius molestiae ipsa laudantium voluptatem similique eveniet, ipsam iure natus perferendis?</p>
                        </div>
                        <div className="skills">
                            <hr/>
                            <h3>Skills</h3>
                        </div>
                        <div className="workexperience">
                            <hr/>
                            <h3>Work Experience</h3>
                        </div>
                        <div className="education">
                            <hr/>
                            <h3>Education</h3>
                        </div>
                        <div className="awards">
                            <hr/>
                            <h3>Awards</h3>
                        </div>
                        <div className="certifications">
                            <hr/>
                            <h3>Certifications</h3>
                        </div>
                        <div className="pulications">
                            <hr/>
                            <h3 className="publications">Publications</h3>
                        </div>
                    </div>            
                    <div className="people-hall">
                        <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            scrollable
                            scrollButtons="auto"
                        >
                            <Tab label="Projects" />
                            <Tab label="Products" />
                            <Tab label="Network" />
                            <Tab label="Favorites" />
                            <Tab label="Jobs" />
                            <Tab label="Academy" />
                            <Tab label="Apps" />
                        </Tabs>
                        </AppBar>
                        {value === 0 && <TabContainer>
                            <h1>Projects</h1>
                        </TabContainer>}
                        {value === 1 && <TabContainer>
                            <div className="row">
                                <div className="col-md-3 m-b-sm"><ProductCard></ProductCard></div>
                                <div className="col-md-3 m-b-sm"><ProductCard></ProductCard></div>
                                <div className="col-md-3 m-b-sm"><ProductCard></ProductCard></div>
                                <div className="col-md-3 m-b-sm"><ProductCard></ProductCard></div>
                                <div className="col-md-3 m-b-sm"><ProductCard></ProductCard></div>
                                <div className="col-md-3 m-b-sm"><ProductCard></ProductCard></div>
                                <div className="col-md-3 m-b-sm"><ProductCard></ProductCard></div>
                                <div className="col-md-3 m-b-sm"><ProductCard></ProductCard></div>                                   
                            </div>
                        </TabContainer>}
                        {value === 2 && <TabContainer>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={valueSecondaryTabsNetwork}
                                    onChange={this.handleChangeNetwork}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    scrollable
                                    scrollButtons="auto"
                                >
                                    <Tab label="My Connections" />
                                    <Tab label="Topics Following" />
                                </Tabs>
                            </AppBar>
                            {valueSecondaryTabsNetwork === 0 && <TabContainer>
                                <MyConnections></MyConnections>
                            </TabContainer>}
                            {valueSecondaryTabsNetwork === 1 && <TabContainer>
                                <TopicsFollowing></TopicsFollowing>
                            </TabContainer>}
                        </TabContainer>}
                        {value === 3 && <TabContainer>Item Four</TabContainer>}
                        {value === 4 && <TabContainer>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={valueSeacondaryTabsJobs}
                                    onChange={this.handleChangeJobs}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    scrollable
                                    scrollButtons="auto"
                                >
                                    <Tab label="Buyers Activity" />
                                    <Tab label="Sellers Activity" />
                                </Tabs>
                            </AppBar>
                            {valueSeacondaryTabsJobs === 0 && <TabContainer>
                                <div className="row">
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                </div>
                            </TabContainer>}
                            {valueSeacondaryTabsJobs === 1 && <TabContainer>
                                <div className="row">
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                    <div className="col-md-12 m-b-sm"><JobCard></JobCard></div>
                                </div>
                            </TabContainer>}
                        </TabContainer>}
                        {value === 5 && <TabContainer>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={valueSeacondaryTabsAcademy}
                                    onChange={this.handleChangeAcadmey}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    scrollable
                                    scrollButtons="auto"
                                >
                                    <Tab label="My Learning Paths" />
                                    <Tab label="My Courses" />
                                    <Tab label="My Tests" />
                                </Tabs>
                            </AppBar>
                            {valueSeacondaryTabsAcademy === 0 && <TabContainer>
                                <div className="row">
                                    <div className="col-md-4"><LearningPathCard></LearningPathCard></div>
                                    <div className="col-md-4"><LearningPathCard></LearningPathCard></div>
                                    <div className="col-md-4"><LearningPathCard></LearningPathCard></div>
                                    <div className="col-md-4"><LearningPathCard></LearningPathCard></div>
                                    <div className="col-md-4"><LearningPathCard></LearningPathCard></div>
                                    <div className="col-md-4"><LearningPathCard></LearningPathCard></div>
                                </div>
                            </TabContainer>}
                            {valueSeacondaryTabsAcademy === 1 && <TabContainer>
                                <div className="row">
                                    <div className="col-md-4"><CourseCard></CourseCard></div>
                                    <div className="col-md-4"><CourseCard></CourseCard></div>
                                    <div className="col-md-4"><CourseCard></CourseCard></div>
                                    <div className="col-md-4"><CourseCard></CourseCard></div>
                                    <div className="col-md-4"><CourseCard></CourseCard></div>
                                    <div className="col-md-4"><CourseCard></CourseCard></div>
                                </div>                                </TabContainer>}
                            {valueSeacondaryTabsAcademy === 2 && <TabContainer>
                                <div className="row">
                                    <div className="col-md-4"><TestCard></TestCard></div>
                                    <div className="col-md-4"><TestCard></TestCard></div>
                                    <div className="col-md-4"><TestCard></TestCard></div>
                                    <div className="col-md-4"><TestCard></TestCard></div>
                                    <div className="col-md-4"><TestCard></TestCard></div>
                                    <div className="col-md-4"><TestCard></TestCard></div>
                                </div>
                            </TabContainer>}
                        </TabContainer>}
                        {value === 6 && <TabContainer>
                            <div className="row">
                                <div className="col-md-4"><AppCard></AppCard></div>
                                <div className="col-md-4"><AppCard></AppCard></div>
                                <div className="col-md-4"><AppCard></AppCard></div>
                                <div className="col-md-4"><AppCard></AppCard></div>
                                <div className="col-md-4"><AppCard></AppCard></div>
                                <div className="col-md-4"><AppCard></AppCard></div>
                            </div>
                        </TabContainer>}
                    </div>
                </div> 
            </div>
        );
    }
}

PeopleDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};
  

export default  withStyles(styles)(PeopleDetails);