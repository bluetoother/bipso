import React from 'react';
import Head from '../../Head';
import MarkdownElement from '../../MarkdownElement';
import CharDefsTable from './CharDefsTable';
import charDescReadmeText from '../../../docs/charDesc.md';
import charTableReadmeText from '../../../docs/charTable.md';
import bipsoUuid from '../../../misc/bipso_uuid.js';
import AppBar from 'material-ui/AppBar';

var bipso = require('bipso'),
	charTbCss = require('../../../styles/charTable.css');

var tableContent = {},
	oInfo;

for (var key in bipsoUuid) {
	if (key !== 'oid') {
		tableContent[key] = bipsoUuid[key];
	}
}

// <div className={charTbCss["charTable"]} style={{margin: '48px 72px', padding: '0 90px', fontSize: '90px'}}>
// 	<CharDefsTable table={tableContent} />
// </div>	

var CharPage = React.createClass({
    render: function () {
        return (
            <div>
                <Head display='navbar' selectedIndex={1}>
                </Head>
                
                <div style={{paddingTop: '64px'}}>
	                <div style={{margin: '48px 72px'}}>
	                    <MarkdownElement text={charDescReadmeText} />
	                </div>
	                <div className={charTbCss["charTable"]} style={{margin: '60px 72px'}}>
	                    <MarkdownElement text={charTableReadmeText} />
	                </div>
	            </div>
            </div>
        );
    }
});

module.exports = CharPage;