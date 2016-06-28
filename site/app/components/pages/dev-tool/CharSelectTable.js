// Input props:
//  { tableData: [ { rid: 'oid_string', text: 'menu_item_title' }, ... ] }
// Output Callback via props:
//  { onRowSelected: function (rids) {  // [ 'xxx', 'yyy', ... ] } }

import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

var CharSelectTable = React.createClass({
    getInitialState: function () {
        return {
              fixedHeader: true,
              fixedFooter: true,
              stripedRows: false,
              showRowHover: false,
              selectable: true,
              multiSelectable: true,
              enableSelectAll: false,
              deselectOnClickaway: false,
              showCheckboxes: true,
              height: '300px',
        };
    },
    handleRowSelection: function (cells) {
        console.log(cells);
        var selectedRids = [];

        cells.forEach(function (cellIndex) {
            selectedRids.push(this.props.tableData[cellIndex].rid);
        }.bind(this));
        if (this.props.onRowSelected)
            this.props.onRowSelected(selectedRids);
    },
    render: function () {
        return (
          <div>
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
              onRowSelection={this.handleRowSelection}
            >
              <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll} >

                <TableRow>
                  <TableHeaderColumn tooltip="IPSO Resources">Fields</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Data Type">Data Type</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Mandatory">Mandatory</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Description">Description</TableHeaderColumn>
                </TableRow>

              </TableHeader>

              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
                {this.props.tableData.map( (row, index) => (
                  <TableRow key={index} selected={row.selected ? row.selected : row.mandatory} selectable={!row.mandatory}>
                    <TableRowColumn>{row.rid}</TableRowColumn>
                    <TableRowColumn>{row.type}</TableRowColumn>
                    <TableRowColumn>{row.mandatory.toString()}</TableRowColumn>
                    <TableRowColumn>{row.desc}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>

            </Table>
         </div>
        );
    }
});

module.exports = CharSelectTable;