import React from 'react';

import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import './styles/NavBar.css';
import {FlatButton, IconButton} from 'material-ui';

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
        }
        
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({
            open: true,
        })
    }

    handleClose() {
        this.setState({
            open: false,
        })
    }

    render() {
        return (
            <div>
                <AppBar 
                    iconElementLeft={
                        <IconButton>
                            <FlatButton label='About' onClick={this.handleOpen}/>
                        </IconButton>
                    }
                />
                <Dialog
                    title="About Us"
                    modal={false}
                    actions={
                        <FlatButton
                            label="Close"
                            primary={true}
                            onClick={this.handleClose}
                        />
                    }
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                > Inclusive Colgate is a student-run initiative to advocate for a 
                respectful and inclusive campus. At the open forum on Monday, 
                April 16th in the Ho Atrium, the Inclusive Colgate team presented 
                blueprints of recommendations to the administration. 
                Around 300 students, faculty, and staff engaged in open, respectful 
                conversations on concrete, sustainable steps to address 
                racial discrimination and improve the Colgate experience 
                for all members, especially students of color and international students. 
                </Dialog>
            </div>
        )
    }
}

export default NavBar 