import React from 'react';
import './itemList.css';
import itemApi from "../../apis/item";

class ItemList extends React.Component {

    state = {
        Items: [],
    };

    componentDidMount() {
        const URL = "/default/jstasks?offset=0&count=5";
        itemApi.get(URL).then(response => {
            this.setState({Items: response.data});
        });
    }

    handleScroll = e => {
        let element = e.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            let length = this.state.Items.length;
            const URL = "/default/jstasks?offset=" + length + "&count=5";
            itemApi.get(URL).then(response => {
                this.setState({Items: [...this.state.Items, ...response.data],});
            });
        }
    };


    renderItems = () => {
        return this.state.Items.map((item, key) => (
            <div key={key}>
                <Item thumb={item.thumb} id={item.id} title={item.title} onclick={() => this.props.setItemID(item.id)}/>
                <div className="ui divider"/>
            </div>
        ));
    };

    render() {
        return (
            <div className="ui segment">
                <h2 className="ui header">Items</h2>
                <div className="ui segment list" onScroll={this.handleScroll}>
                    <div className="ui relaxed items ">
                        {this.renderItems()}
                    </div>
                </div>
            </div>
        );
    }
}


function Item(props) {
    return (
        <div className="item" onClick={props.onclick}>
            <div className="ui tiny image">
                <img alt="itemImage" src={props.thumb}/>
            </div>
            <span className="middle aligned header shiftleft">
              {props.title}
            </span>
        </div>
    );
}

export default ItemList;