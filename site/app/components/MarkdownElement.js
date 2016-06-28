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
    componentWillMount() {;
        marked.setOptions({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            highlight: function(code, lang) {
                return require('highlight.js').highlight(lang, code).value;
            },
        });
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
