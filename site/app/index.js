import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';

import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import HomePage from './components/pages/Home';
import CharPage from './components/pages/Char';
import DevToolPage from './components/pages/DevTool';

injectTapEventPlugin();

var App = React.createClass({
    render: function () {
        return (
            <MuiThemeProvider>
                <Router history={browserHistory}>
                    <Route path="/" component={HomePage} />
                    <Route path="/characteristic" component={CharPage} />
                    <Route path="/devtool" component={DevToolPage} />
                </Router>
            </MuiThemeProvider>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('mybody'));
