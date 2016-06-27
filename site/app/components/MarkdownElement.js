import React from 'react';
import marked from 'marked';

/**************************************************/
/*** <MarkdownElement text={you_markdown}/>     ***/
/**************************************************/
var mdcss = require('../styles/markdown.css');

module.exports = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired
    },
    defaultProps: {
        text: ''
    },
    render: function () {
        var style = {
            marginTop: 20,
            marginBottom: 20,
            padding: '0 50px'
        };

        return (
            <div className={mdcss["markdown-body"]} styles={style} dangerouslySetInnerHTML={{__html: marked(this.props.text)}} />
        );
    }
});
