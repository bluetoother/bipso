import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MarkdownElement from './components/MarkdownElement';
import GridLayout from './components/GridLayout';
import CharDefsTable from './components/CharDefsTable';

var text = require('./a.md');

injectTapEventPlugin();

var table = {
    "dIn": {
        "name": "Digital Input",
        "uuid": "0xcc00",
        "desc": "digital input"
    },
    "dOut": {
        "name": "Digital Output",
        "uuid": "0xcc01",
        "desc": "digital output"
    },
    "aIn": {
        "name": "Analogue Input",
        "uuid": "0xcc02",
        "desc": "analogue input"
    }
};

var Amd = (
    <MarkdownElement text={text}/>
);

var Def = (
    <CharDefsTable table={table}/>
);

ReactDOM.render(
    <GridLayout head={Amd}/>,
    document.getElementById("mybody")
);
