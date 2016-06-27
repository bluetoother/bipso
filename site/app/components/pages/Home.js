import React from 'react';

import Head from '../Head';
import MarkdownElement from '../MarkdownElement';

import specReadmeText from '../../docs/spec.md';

var HomePage = React.createClass({
    render: function () {
        return (
            <div>
                <Head display='banner'>
                </Head>
                <div style={{margin: '48px 72px'}}>
                    <MarkdownElement text={specReadmeText}>
                    </MarkdownElement>
                </div>
            </div>
        );
    }
});

module.exports = HomePage;