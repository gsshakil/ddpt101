import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Link from 'next/link';


class ProjectCard extends React.Component {

    render(props){
        return(
            <div className="project-card">
               <Link href='/project-details'>
                <a>
                   <div className="content">
                    <div className="avatar">
                        <img src={this.props.projectImage} alt=""/>
                    </div>
                    <div className="card-content">
                        <div className="inside-content" onClick={this.toggle}>
                            <div className="centered-content">
                                <h3>{this.props.projectTitle}</h3>
                                <div className="by">
                                    <img src={this.props.byAvatar} alt=""/>
                                    <h4>{this.props.byUserName}</h4>
                                </div>
                                <ul className="categories">
                                    <li><a href="">{this.props.category}</a></li>
                                    <li><a href="">{this.props.category}</a></li>
                                    <li><a href="">{this.props.category}</a></li>
                                </ul>
                                <div className="date-time">
                                    <i className="zmdi zmdi-time infinite wobble"></i>{this.props.dateTime}
                                </div>
                            </div>                                
                        </div>
                    </div>
                </div>
                </a>
                </Link>
                <ul className="project-card-footer">
                    <li><a href=""><i className="zmdi zmdi-favorite infinite wobble"></i></a></li>
                    <li><a href=""><i className="zmdi zmdi-comments infinite wobble"></i> {this.props.commentCount}</a></li>
                    <li><a href=""><i className="zmdi zmdi-eye infinite wobble"></i> {this.props.viewCount}</a></li>
                </ul>
                <div className="byAvatar">
                    <img src={this.props.byAvatar} alt=""/>
                </div>
                <div className="byContent">
                    <h3><a href="">Project Title</a></h3>
                    {this.props.byUserName} on Oct 23, 2019 12:34 PM
                </div>
                <div className="button-group">
                    <ul>
                        <li><Button className="btn btn-info">Like</Button></li>
                        <li><Button className="btn btn-info">Favorite</Button></li>
                    </ul>
                </div>                        
            </div>
        );
    }
};

export default ProjectCard;

