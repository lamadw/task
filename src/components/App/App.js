import React from 'react';
import Items from '../items/items';
import ItemView from '../itemView/itemView';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
    state = {
        item: undefined,
        showItem: false
    };

    setId = value => {
      
            this.setState({
                item: value,
                showItem: true
            });
      
    };

    back = () => {
        this.setState({
            showItem: false
        });
    };


    renderMobileContent = () => {
        if (this.state.showItem) {
            return (
                <div>
                    <button className="ui secondary  basic button" onClick={this.back}>Back</button>
                    <ItemView item={this.state.item}/>
                </div>
            );
        } else {
            return (
                <Items setId={this.setId}/>
            );
        }
    };

    render() {
        return (
            <div className="ui container">
                <div className="ui grid">
                    <div className="column tablet computer only row">
                        <div className="column">
                            <div className="ui horizontal segments computer ">
                                <Items setId={this.setId}/>
                                <ItemView item={this.state.item}/>
                            </div>
                        </div>
                    </div>
                    <div className="column mobile only row">
                        <div className="column">
                            {this.renderMobileContent()}
                        </div>
                    </div>
                </div>
            </div>

        );
    }


}


