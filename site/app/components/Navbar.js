import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

var Navbar = React.createClass({
    render: function () {
        return (
            <AppBar title="BIPSO">
                <Tabs>
                    <Tab label="Home" />
                    <Tab label="Chars" />
                    <Tab label="Dev Tool" />
                </Tabs>
            </AppBar>
        );
    }
});

module.exports = Navbar;