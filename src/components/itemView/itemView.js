import React, { Component } from 'react';

import './itemView.css'
export default class ItemView extends React.Component {
   

    renderContant = () => {
        if (this.props.item === undefined) {
            return (
                <div className="ui center aligned  segment i">
                <div className="ui header">
                    Select item to view
                </div>
                </div>
            );
        } else {
            return (
                <div className="ui center aligned  segment i">
                    <div className="ui medium image">
                        <img src=  {this.props.item.picture} alt="item image"/>
                    </div>
                    <div className="content">
            <div className="ui header">{this.props.item.title}</div>
                        <div className="description">
                        {this.props.item.desc}
                        </div>
                    </div>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="ui  segment">
                <h2 className="ui header">Item</h2>
                {this.renderContant()}
            </div>
        );
    }
}



