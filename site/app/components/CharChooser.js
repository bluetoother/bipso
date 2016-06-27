import React from 'react';
import DropDownMenuLongMenu from './DropDownMenuLongMenu';
import CharSelectTable from './CharSelectTable';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

var bipso = require('bipso');

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}


const tableData = [
  {
    rid: '123',
    type: 'uint8',
    mandatory: true,
  },
  {
    rid: 'vv44v',
    type: 'string',
    mandatory: true,
  },
  {
    rid: 'aaavvv',
    type: 'uint8',
    mandatory: true,
  },
  {
    rid: 'xxxvvv',
    type: 'uint8',
    mandatory: false,
  },
  {
    rid: 'aavvsdasv',
    type: 'uint18',
    mandatory: true,
  },
  {
    rid: 'vdasdavv',
    type: 'uint18',
    mandatory: false,
  },
];

var oids = [ { name: 'o_name01', text: 'object_text01' }, { name: 'o_name02', text: 'object_text02' }, { name: 'o_name03', text: 'object_text03' } ];



var CharChooser = React.createClass({
    getInitialState: function () {
        return {};
    },
    handleObjectSelected: function (oid) {
        console.log('OID: ' + oid);
    },
    handleResourceSelected: function (rids) {
        console.log('Resources: ');
        console.log(rids);
    },
    render: function () {
        var uuid = bipso.ou('dIn');
        return (
            <div>
                Smart object:
                <DropDownMenuLongMenu maxHeight={160} items={oids} onChanged={this.handleObjectSelected}/>
                <div style={{ display: 'inline' }}>UUID: {uuid}</div>
                <CharSelectTable tableData={tableData} onRowSelected={this.handleResourceSelected} />
            </div>
        );
    }
});

module.exports = CharChooser;