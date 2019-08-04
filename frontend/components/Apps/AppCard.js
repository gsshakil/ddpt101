import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AppDetails from './AppDetails';

class AppCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render(){
        return (
            <div className="app-card">
                <div className="app-image">
                    <img src="https://via.placeholder.com/150" alt=""/>
                </div>
                <div className="content">
                    <h3 onClick={this.toggle}>App Title</h3>
                    <h5>Categury</h5>
                    <hr/>
                    <hr/>
                    <h5>Price</h5>
                    <button className="btn btn-outline-info">Add</button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        <h3>App Title</h3>
                        <div className="byAvatar">
                            <img src={this.props.byAvatar} alt=""/>
                        </div>
                        <div className="byContent">
                            {this.props.byUserName} on Oct 23, 2019 12:34 PM
                        </div>
                        <div className="button-group">
                            <ul>
                                <li><Button className="btn btn-info">Install</Button></li>
                                <li><Button className="btn btn-info">Favorite</Button></li>
                            </ul>
                        </div> 
                    </ModalHeader>
                    <ModalBody>
                        <AppDetails></AppDetails>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
};

export default AppCard;

