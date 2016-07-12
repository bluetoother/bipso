import { Link } from 'react-router';
import React from 'react';
import ClearFix from 'material-ui/internal/ClearFix';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

var background = 'linear-gradient(to left, #006064 , #0082FB)';

var innerStyles = {
        root: {
            padding: 24,
            boxSizing: 'border-box',
        },
        content: {
            maxWidth: 1200,
            margin: '0 auto'
        }
    },
    styles = {
        root: {
            background: background,
            backgroundColor: "#0082FB",
            overflow: 'hidden',
            marginTop: '-60px'
        },
        navbar: {
            background: background,
            backgroundColor: "#0082FB",
            top: '0'
        },
        tagline: {
            margin: '16px auto 0 auto',
            textAlign: 'center',
            maxWidth: 575,
        },
        label: {
            color: '#E0E0E0'
        },
        demoStyle: {
            aligh: 'central',
            margin: '16px 16px 0px 16px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
        },
        h1: {
            fontSize: 60,
            color: '#FFFFFF',
            fontWeight: 600,
            letterSpacing: '3px'
        },
        h2: {
            fontSize: 18,
            color: '#E0E0E0',
            lineHeight: '28px',
            paddingTop: 5,
            marginTop: -50,
            marginBottom: 40,
            fontWeight: 300,
            fontStyle: 'italic'
        },
        taglineWhenLarge: {
            marginTop: 32,
        },
        h1WhenLarge: {
            fontSize: 56,
            color: '#FFFFFF'
        },
        h2WhenLarge: {
            fontSize: 18,
            lineHeight: '32px',
            // paddingTop: 0,
            marginBottom: 12,
        }
    };

var InnerBanner = React.createClass({
    protoType: {
        style: React.PropTypes.obj
    },
    render: function () {
        return (
            <ClearFix style={Object.assign(innerStyles.root, this.props.style)}>
                {this.props.children}
            </ClearFix>
        );
    }
});

var Banner = React.createClass({
    render: function () {
        return (
            <div>
                <AppBar
                    zDepth={0}
                    showMenuIconButton={false}
                    iconElementRight={<IconButton iconClassName="muidocs-icon-custom-github" href="https://github.com/callemall/material-ui"/>}
                    style={styles.navbar}
                />
                <InnerBanner style={styles.root}>
                    <div style={styles.tagline}>
                        <h1 style={styles.h1}>BIPSO</h1>
                        <h2 style={styles.h2}>
                            Define your BLE Characteristics in an IPSO way.
                        </h2>
                        <RaisedButton
                            className="demo-button"
                            label="Characteristics"
                            backgroundColor='rgba(255, 255, 255, 0)'
                            containerElement={<Link to="/characteristic" />}
                            style={styles.demoStyle}
                            labelStyle={styles.label}
                        />
                        <RaisedButton
                            className="demo-button"
                            label="Dev Tool"
                            backgroundColor='rgba(255, 255, 255, 0)'
                            containerElement={<Link to="/devtool" />}
                            style={styles.demoStyle}
                            labelStyle={styles.label}
                        />
                        <RaisedButton
                            className="demo-button"
                            label="View on Github"
                            backgroundColor='rgba(255, 255, 255, 0)'
                            linkButton={true}
                            href='https://github.com/bluetoother/bipso'
                            style={styles.demoStyle}
                            labelStyle={styles.label}
                        />
                    </div>
                </InnerBanner>
            </div>
        );
    }
});

module.exports = Banner;

