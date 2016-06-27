import React from 'react';
import Head from '../../Head';
import MarkdownElement from '../../MarkdownElement';
import CharDefsTable from './CharDefsTable';
import charDescReadmeText from '../../../docs/charDesc.md';
import bipsoUuid from '../../../misc/bipso_uuid.js';
import AppBar from 'material-ui/AppBar';
var tableContent = {};

for (var key in bipsoUuid) {
	if (key !== 'oid') {
		tableContent[key] = bipsoUuid[key];
	}
}

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
	                <div style={{margin: '48px 72px', padding: '0 90px'}}>
	                	<CharDefsTable table={tableContent} />
	                </div>
	            </div>
            </div>
        );
    }
});

module.exports = CharPage;