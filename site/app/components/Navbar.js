import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

var Navbar = React.createClass({
    render: function () {
        return (
            <Tabs style={{width: '50%', paddingLeft: '50%', backgroundColor: lightBaseTheme.palette.primary1Color}}>
                <Tab style={{marginButtom: -5}} label="Home" />
                <Tab label="Chars" />
                <Tab label="Dev Tool" />
            </Tabs>
        );
    }
});

module.exports = Navbar;