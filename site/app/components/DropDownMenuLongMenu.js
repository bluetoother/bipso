// Input props:
//  { maxHeight: Number, items: [ { name: 'oid_string', text: 'menu_item_title' }, ... ] }
// Output Callback via props:
//  { onChanged: function (oidName) {} }

import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

var DropDownMenuLongMenu = React.createClass({
    getInitialState: function () {
        console.log(this.props.items);

        return {
            value: this.props.items[0].name
        };
    },
    handleChange: function (event, index, value) {
        console.log('VALUE');
        console.log(value);

        this.setState({value});
        if (this.props.onChanged)
            this.props.onChanged(value);
    },
    render: function () {
        var items = this.props.items;
        items = items.map(function (item, i) {
            return (
                <MenuItem value={item.name} key={i} primaryText={item.text}
            />);
        });
        return (
          <DropDownMenu maxHeight={this.props.maxHeight || 300} value={this.state.value} onChange={this.handleChange}>
            {items}
          </DropDownMenu>
        );
    }
});

module.exports = DropDownMenuLongMenu;
