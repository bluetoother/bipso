import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

var Head = React.createClass({
    protoType: {
        display: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            <div>
                { this.props.display === 'banner' ? <Banner /> : null }
                { this.props.display === 'navbar' ? <Navbar /> : null }
            </div>
        );
    }
});

module.exports = Head;