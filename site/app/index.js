import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Head from './components/Head';

injectTapEventPlugin();

var App = React.createClass({
    render: function () {
        return (
            <MuiThemeProvider>
                <Head display='navbar' />
            </MuiThemeProvider>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('mybody'));