import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

/**************************************************/
/*** <CharDefsTable table={you_charDefsTable}/> ***/
/**************************************************/

var CharColoumn = React.createClass({
    render: function () {
        return (
            <TableRow>
                <TableRowColumn>{this.props.oid}</TableRowColumn>
                <TableRowColumn>{this.props.uuid}</TableRowColumn>
                <TableRowColumn>{this.props.desc}</TableRowColumn>
            </TableRow>
        );
    }
});

module.exports = React.createClass({
    propTypes: {
        table: React.PropTypes.object
    },
    render: function () {
        var charArray = [];

        for(var index in this.props.table) {
            charArray.push(
                <CharColoumn oid={index} 
                             uuid= {this.props.table[index].uuid}
                             desc= {this.props.table[index].desc} />
            );
        }

        return (
            <div>
                <Table selectable={false}>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>OID</TableHeaderColumn>
                            <TableHeaderColumn>UUID</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {charArray}
                </TableBody>
              </Table>
            </div>
        );
    }
});
