import { Link } from 'react-router';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionList from 'material-ui/svg-icons/action/list';
import ActionBuild from 'material-ui/svg-icons/action/build';

var styles = {backgroundColor: '#00ACC1', fontWeight: 400};

var Navbar = React.createClass({
    render: function () {
        return (
            <Tabs initialSelectedIndex={this.props.selectedIndex}
                style={{width: '50%', paddingLeft: '50%', backgroundColor: '#00ACC1', position: 'fixed', top: '0px', zIndex: 1}}
            >
                <Tab 
                    icon={<ActionHome />}
                    label="Home" style={styles} linkButton containerElement={<Link to="/bipso" />} />
                <Tab 
                    icon={<ActionList />}
                    label="Chars" style={styles} containerElement={<Link to="/bipso/characteristic" />} />
                <Tab
                    icon={<ActionBuild />}
                    label="Dev Tool" style={styles} containerElement={<Link to="/bipso/devtool" />} />
            </Tabs>
        );
    }
});

module.exports = Navbar;