import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import DropDownMenuLongMenu from './components/DropDownMenuLongMenu';
// import CharSelectTable from './components/CharSelectTable';
import CharChooser from './components/CharChooser';


injectTapEventPlugin();

var element = document.createElement('div');
element.id = "container";

document.body.appendChild(element);


var App = function () {
    var hdlr = function (value) {
        console.log(value);
    };

    var cellHdlr = function (cells) {
        console.log('who are selected');
        console.log(cells);
    };
    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
            <CharChooser />
            <hr />
        </div>
        </MuiThemeProvider>
    );
};

ReactDOM.render(
  <App />,
  document.getElementById('container')
);