import { Router, Route, Link, browserHistory, IndexRoute, useRouterHistory } from 'react-router';

import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createHashHistory} from 'history';

import HomePage from './components/pages/Home';
import CharPage from './components/pages/Char';
import DevToolPage from './components/pages/DevTool';

injectTapEventPlugin();

var App = React.createClass({
    render: function () {
        console.log(this.props.children);
        return (
            <div>
                {this.props.children || <HomePage />}
            </div>
        )
    }
});

var WebApp = React.createClass({
    render: function () {
        return (
            <MuiThemeProvider>
                <Router history={useRouterHistory(createHashHistory)({queryKey: false})}>
                    <Route path='/' component={App} >
                        <IndexRoute component={HomePage} />
                        <Route path="/characteristic" component={CharPage} />
                        <Route path="/devtool" component={DevToolPage} />
                    </Route>
               </Router>
            </MuiThemeProvider>
        );
    }
});

ReactDOM.render(<WebApp />, document.getElementById('mybody'));
