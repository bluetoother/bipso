import React from 'react';
import DropDownMenuLongMenu from './DropDownMenuLongMenu';
import CharSelectTable from './CharSelectTable';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import Divider from 'material-ui/Divider';
import {blue300, indigo900} from 'material-ui/styles/colors';
import MarkdownElement from './MarkdownElement';

var bipso = require('bipso');
var bipsoUuid = require('../misc/bipso_uuid');
var resourceDesc = require('../misc/desc');
var oidDefs = bipsoUuid.oid;

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

var oids = [],
    totalLen = 0;
for (var i in oidDefs) {
    oids.push({ name: i, text: bipsoUuid[i].name });
}

function getTableData (oid, rids) {
    var tableData = [],
        charFields = bipso.spec(oid).fields;

    charFields.mandatory.forEach(function (field) {
        tableData.push({ rid: field.name, type: field.type, mandatory: true, desc: resourceDesc[field.name] });
    });

    charFields.optional.forEach(function (field) {
        var selected = false;
        if (rids && rids.indexOf(field.name) !== -1) selected = true;
        tableData.push({ rid: field.name, type: field.type, mandatory: false, desc: resourceDesc[field.name], selected: selected });
    });

    return tableData;
}

function getMandatoryRids (oid) {
    return bipso.spec(oid).fields.mandatory.map(function (field) {
        return field.name;
    });
}

function getSampleCode (oid, rids) {
    var spec = bipso.spec(oid),
        oidInfo = bipsoUuid[oid],
        ridInfo = {},
        flagsVal = 0,
        bufName = spec.oid + 'Buf',
        indexNum = 0,
        manStr = '',
        optStr = '',
        bufStr = '';

    totalLen = 0;

    spec.fields.optional.forEach(function (rid, i) {
        var fieldName = ' ' + rid.name,
            fieldVal;

        ridInfo[rid.name] = { type: rid.type};
        if (rid.type === 'string' || rid.type === 'buffer') 
            fieldName = fieldName + '[7]';
        
        if (rids.indexOf(rid.name) !== -1) {
            flagsVal += 1<<i;
            fieldVal = getTypeVal(rid.type, ridInfo[rid.name]);
            optStr += getTypeStr(rid.type) + fieldName + ' = ' + fieldVal + ';\n';
        }
    });

    spec.fields.mandatory.forEach(function (rid) {
        var fieldName = ' ' + rid.name,
            fieldVal,
            str;

        ridInfo[rid.name] = { type: rid.type};
        if (rid.type === 'string' || rid.type === 'buffer') 
            fieldName = fieldName + '[7]';

        fieldVal = getTypeVal(rid.type, ridInfo[rid.name]);

        if (rid.name === 'flags') {
            str = (flagsVal > 15) ? '': '0';
            fieldVal = '0x' +  str +  flagsVal.toString(16);
            manStr += getTypeStr(rid.type) + fieldName + ' = ' + fieldVal + ';    //' + flagsVal.toString(2) +'\n';
        } else 
            manStr += getTypeStr(rid.type) + fieldName + ' = ' + fieldVal + ';\n';
    });

    rids.forEach(function (rid) {
        var rInfo = ridInfo[rid],
            rType = rInfo.type;

        if (rType === 'boolean' || rType === 'uint8')
            bufStr += bufName + '[' + indexNum + '] = ' + rid + '\n';
        else 
            bufStr += 'osal_memcpy( &' + bufName + '[' + indexNum + '], ' + rid + ', sizeof( ' + rid + ' ) );\n';
        
        indexNum += rInfo.len;
    });

    return (
        '```c\n' + 
        '//XXX.h\n' +
        '#define ' + oidInfo.name.toUpperCase().replace(' ', '_') + '_CHAR_UUID        ' + oidInfo.uuid.toUpperCase() + '    // Declare a characteristic UUID defined in BIPSO\n' +
        '#define ' + oidInfo.name.toUpperCase().replace(' ', '_') + '_CHAR             0         // Declare a characteristic value variable\n' +
        '\n' +
        '\n' +
        '//XXX.c\n' +
        manStr +
        optStr +
        '\n' +
        bufName + '[' + totalLen + '];\n' +
        '\n' +
        bufStr +
        '```'
    );
}

function getTypeStr (type) {
    switch (type) {
        case 'uint8':
        case 'string':
        case 'buffer':
            return 'uint8  ';
        case 'uint16':
            return 'uint16 ';
        case 'float':
            return 'float  ';
        case 'boolean':
            return 'bool   ';
    }
}

function getTypeVal (type, rInfo) {
    switch (type) {
        case 'uint8':
            rInfo.len = 1;
            totalLen += 1;
            return Math.floor(Math.random() * 255);
        case 'string':
            rInfo.len = 7;
            totalLen += 7;
            return  '{ 0x06, \'S\', \'t\', \'r\', \'i\', \'n\', \'g\' }';
        case 'buffer':
            rInfo.len = 7;
            totalLen += 7;
            return '{ 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 }';
        case 'uint16':
            rInfo.len = 2;
            totalLen += 2;
            return Math.floor(Math.random() * 65535);
        case 'float':
            rInfo.len = 4;
            totalLen += 4;
            return (Math.random() * 255).toFixed(2);
        case 'boolean':
            rInfo.len = 1;
            totalLen += 1;
            return Math.floor(Math.random() * 2) ? 'TRUE' : 'FALSE';
    }
}

var CharChooser = React.createClass({
    getInitialState: function () {
        return {
            uuid: bipso.ou('dIn'),
            tableData: getTableData('dIn'),
            sampleCode: getSampleCode('dIn', getMandatoryRids('dIn'))
        };
    },
    handleObjectSelected: function (oid) {
        console.log('OID: ' + oid);
        this.setState({
            uuid: bipso.ou(oid),
            tableData: getTableData(oid),
            sampleCode: getSampleCode(oid, getMandatoryRids(oid))
        });
    },
    handleResourceSelected: function (rids) {
        console.log('Resources: ');
        console.log(rids);
        var oid = bipso.uo(this.state.uuid);
        this.setState({
            tableData: getTableData(oid, rids),
            sampleCode: getSampleCode(oid, rids)
        });
    },
    render: function () {
        return (
            <div>
                Smart object:
                <DropDownMenuLongMenu maxHeight={160} items={oids} onChanged={this.handleObjectSelected}/>
                <div style={{ display: 'inline' }}>UUID: {this.state.uuid}</div>
                <Divider />
                <CharSelectTable tableData={this.state.tableData} onRowSelected={this.handleResourceSelected} />
                <br />
                <div style={{color: '#212121'}}>
                    <p style={{fontSize: 20, fontWeight: 400}}>Sample Code</p>
                        <li style={{marginLeft: '30px'}}>
                            <p>Some value of resource may need to read from sensor or other device, e.g., 'dInState = readSersorValue();'</p>
                        </li>
                    <MarkdownElement text={this.state.sampleCode} />
                </div>
            </div>
        );
    }
});

module.exports = CharChooser;