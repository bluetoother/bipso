import { Router, Route, Link, browserHistory, IndexRoute, Redirect } from 'react-router';

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
        console.log(this.props.children);
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});

var WebApp = React.createClass({
    render: function () {
        return (
            <MuiThemeProvider>
                <Router history={browserHistory}>
                    <Route path='/' component={App}>
                        <Route path='/bipso' component={HomePage} />
                        <Route path="/bipso/characteristic" component={CharPage} />
                        <Route path="/bipso/devtool" component={DevToolPage} />
                    </Route>
               </Router>
            </MuiThemeProvider>
        );
    }
});
 //<Route path="/bipso/characteristic" component={CharPage} />
                        //<Route path="/bipso/devtool" component={DevToolPage} />
ReactDOM.render(<WebApp />, document.getElementById('mybody'));
