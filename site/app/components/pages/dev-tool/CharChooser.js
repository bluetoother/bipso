import React from 'react';
import DropDownMenuLongMenu from './DropDownMenuLongMenu';
import CharSelectTable from './CharSelectTable';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import Divider from 'material-ui/Divider';
import {blue300, indigo900} from 'material-ui/styles/colors';
import MarkdownElement from '../../MarkdownElement';

import sampleCodeReadmeText from '../../../docs/sampleCode.md';

var bipso = require('bipso');
var bipsoUuid = require('../../../misc/bipso_uuid');
var oidDefs = bipsoUuid.oid;

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

var oids = [];
for (var i in oidDefs) {
    oids.push({ name: i, text: bipsoUuid[i].name });
}

var CharChooser = React.createClass({
    getInitialState: function () {
        return {
            uuid: bipso.ou('dIn'),
            tableData: this.getTableData('dIn')
        };
    },
    getTableData: function (oid) {
        var tableData = [],
            charFields = bipso.spec(oid).fields;

        charFields.mandatory.forEach(function (field) {
            tableData.push({ rid: field.name, type: field.type, mandatory: true });
        });

        charFields.optional.forEach(function (field) {
            tableData.push({ rid: field.name, type: field.type, mandatory: false });
        });

        return tableData;
    },
    handleObjectSelected: function (oid) {
        console.log('OID: ' + oid);
        this.setState({
            uuid: bipso.ou(oid),
            tableData: this.getTableData(oid)
        });
    },
    handleResourceSelected: function (rids) {
        console.log('Resources: ');
        console.log(rids);
    },
    render: function () {
        return (
            <div>
                Smart object:
                <DropDownMenuLongMenu maxHeight={160} items={oids} onChanged={this.handleObjectSelected}/>
                <div style={{ display: 'inline' }}>UUID: {this.state.uuid}</div>
                <Divider />
                <CharSelectTable tableData={this.state.tableData} onRowSelected={this.handleResourceSelected} />
                <div style={{paddingTop:'20px', color: '#212121'}}>
                    <h3>Example</h3>
                    <MarkdownElement text={sampleCodeReadmeText} />
                </div>
            </div>
        );
    }
});

module.exports = CharChooser;