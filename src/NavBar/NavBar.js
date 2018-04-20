import React from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import { FlatButton, IconButton } from 'material-ui';

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            drawerOpen: false
        }
        
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    render() {
        return (
            <div>
                <AppBar 
                    iconElementLeft={
                        <IconButton>
                            <FlatButton label='About Us' onClick={this.handleToggle}/>
                        </IconButton>
                    }
                />
                <Drawer 
                    docked={false} 
                    openSecondary={true}
                    open={this.state.drawerOpen}
                    onRequestChange={(drawerOpen) => {this.setState({drawerOpen})}} >
                </Drawer>
            </div>
        )
    }
}

export default NavBar 