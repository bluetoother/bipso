import React from 'react';
import marked from 'marked';

/**************************************************/
/*** <MarkdownElement text={you_markdown}/>     ***/
/**************************************************/

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
            padding: '10px'
        };

        return (
            <div styles={style} dangerouslySetInnerHTML={{__html: marked(this.props.text)}} />
        );
    }
});
