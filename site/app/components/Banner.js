import React from 'react';
import ClearFix from 'material-ui/internal/ClearFix';
import RaisedButton from 'material-ui/RaisedButton';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

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
            backgroundColor: "#0082FB",
            overflow: 'hidden',
        },
        tagline: {
            margin: '16px auto 0 auto',
            textAlign: 'center',
            maxWidth: 575,
        },
        label: {
            color: lightBaseTheme.palette.primary1Color,
        },
        demoStyle: {
            margin: '16px 32px 0px 32px',
        },
        h1: {
            fontSize: 66,
            fontFamily: 'Roboto,sans-serif',
            color: '#FFFFFF',
            fontWeight: 200,
        },
        h2: {
            fontSize: 18,
            fontFamily: 'Roboto,sans-serif',
            lineHeight: '28px',
            paddingTop: 5,
            marginBottom: 13,
            letterSpacing: 0,
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
            <InnerBanner style={styles.root}>
                <div style={styles.tagline}>
                    <h1 style={styles.h1}>BIPSO</h1>
                    <h2 style={styles.h2}>
                        BIPSO help BLE developers define Characteristics in an IPSO way.
                    </h2>
                    <RaisedButton
                        className="demo-button"
                        label="Characteristics"
                        // onTouchTap={this.handleTouchTapDemo}
                        style={styles.demoStyle}
                        labelStyle={styles.label}
                    />
                    <RaisedButton
                        className="demo-button"
                        label="Dev Tool"
                        // onTouchTap={this.handleTouchTapDemo}
                        style={styles.demoStyle}
                        labelStyle={styles.label}
                    />
                </div>
            </InnerBanner>
        );
    }
});

module.exports = Banner;

