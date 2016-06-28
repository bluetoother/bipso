import React from 'react';
import Head from '../Head';
import CharChooser from '../CharChooser';

var bipso = require('bipso');
var bipsoUuid = require('../../misc/bipso_uuid.js');
var oidDefs = bipsoUuid.oid;

var DevToolPage = React.createClass({
    render: function () {
        return (
            <div>
                <Head display='navbar' selectedIndex={2}>
                </Head>
                <div style={{paddingTop: '64px', margin: '48px 72px'}}>
                    <CharChooser />
                </div>
            </div>
        );
    }
});

module.exports = DevToolPage;