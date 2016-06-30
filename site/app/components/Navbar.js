import { Link } from 'react-router';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionList from 'material-ui/svg-icons/action/list';
import ActionBuild from 'material-ui/svg-icons/action/build';

var Navbar = React.createClass({
    render: function () {
        return (
            <Tabs 
                initialSelectedIndex={this.props.selectedIndex}
                tabItemContainerStyle={{backgroundColor: '#1976D2'}}
                style={{width: '50%', paddingLeft: '50%', backgroundColor: '#1976D2', position: 'fixed', top: '0px', zIndex: 1}}
            >
                <Tab 
                    icon={<ActionHome />}
                    label="Home" containerElement={<Link to="/bipso" />} />
                <Tab 
                    icon={<ActionList />}
                    label="Chars" containerElement={<Link to="/bipso/characteristic" />} />
                <Tab
                    icon={<ActionBuild />}
                    label="Dev Tool" containerElement={<Link to="/bipso/devtool" />} />
            </Tabs>
        );
    }
});

module.exports = Navbar;