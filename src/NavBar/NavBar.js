import React from 'react'

import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import Drawer from 'material-ui/Drawer'
import { FlatButton, IconButton } from 'material-ui';

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
        
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState({
        open: !this.state.open
        })
    }

    render() {
        return (
            <div>
                <AppBar 
                    iconElementLeft={
                    <IconButton>
                        <FlatButton label="Settings" onClick={this.handleToggle}/>
                    </IconButton>}
                />
                <Drawer variant="persistent" openSecondary={true} open={this.state.open}>
                    <MenuItem> First menu item </MenuItem>
                    <MenuItem> Second menu item </MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default NavBar 