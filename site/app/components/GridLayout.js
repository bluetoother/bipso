import React from 'react';
import ReactDOM from 'react-dom';
import GridLayout from 'react-grid-layout';
import {WidthProvider} from 'react-grid-layout';

/**************************************************/
/*** <GridLayout head={you_head}                ***/
/***             middleLeft={you_middleLeft}    ***/
/***             middle={you_middle}            ***/
/***             middleRight={you_middleRight}  ***/
/***             foot={you_foot} />             ***/
/**************************************************/

var ReactGridLayout = WidthProvider(GridLayout);

module.exports = React.createClass({
    render: function () {
        var layout = [
            {i: 'head',        x: 0, y: 0, w: 12, h: 1},
            {i: 'middleLeft',  x: 0, y: 1, w: 2, h: 11},
            {i: 'middle',      x: 2, y: 1, w: 8, h: 11},
            {i: 'middleRight', x: 11, y: 1, w: 2, h: 11},
            {i: 'foot',        x: 0, y: 12, w: 12, h: 2}
        ];

        return (
            <ReactGridLayout layout={layout} rowHeight={50} margin={[0, 0]} isDraggable={false} >
                <div id="head" key="head" style={{backgroundColor: '#FFD382', overflow: 'hidden'}}>
                    {this.props.head}
                </div>

                <div id="middleLeft" key="middleLeft" style={{backgroundColor: '#89C4F4'}}>
                    {this.props.middleLeft}
                </div>

                <div id="middle" key="middle" style={{backgroundColor: '#6BB9F0'}}>
                    {this.props.middle}
                </div>
                
                <div id="middleRight" key="middleRight" style={{backgroundColor: '#19B5FE'}}>
                    {this.props.middleRight}
                </div>
                
                <div id="foot" key="foot" style={{backgroundColor: '#30FFFF'}}>
                    {this.props.foot}
                </div>
            </ReactGridLayout>
        )
    }
})
