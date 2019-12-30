import React from 'react';
import ItemList from '../itemList/itemList';
import ItemView from '../itemView/itemView';

class App extends React.Component {
    state = {
        id: undefined,
        showItem: false
    };

    setItemID = value => {

        this.setState({
            id: value,
            showItem: true
        });

    };

    backButtonHandler = () => {
        this.setState({
            showItem: false
        });
    };


    render() {
        return (
            <div className="ui container">
                <div className="ui grid">
                    <div className="column tablet computer only row">
                        <div className="column">
                            <div className="ui horizontal segments computer ">
                                <ItemList setItemID={this.setItemID}/>
                                <ItemView id={this.state.id}/>
                            </div>
                        </div>
                    </div>
                    <div className="column mobile only row">
                        <div className="column">
                            <div style={this.state.showItem ? null : {display: "none"}}>
                                <button className="ui secondary  basic button" onClick={this.backButtonHandler}>Back
                                </button>
                                <ItemView id={this.state.id}/>
                            </div>
                            <div style={this.state.showItem ? {display: "none"} : null}>
                                <ItemList setItemID={this.setItemID}/></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }


}

export default App;
