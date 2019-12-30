import React, { Component } from 'react';
import axios from 'axios';
import './items.css';
export default class Items extends React.Component {
  state = {
    Items: [],

  }
  componentDidMount() {

    axios.get("https://kn4f3kklu4.execute-api.eu-west-1.amazonaws.com/default/jstasks?offset=0&count=5").then(res => {
      this.setState({ Items: res.data });
    })


  }

  handleScroll = e => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      let length = this.state.Items.length;

      axios.get("https://kn4f3kklu4.execute-api.eu-west-1.amazonaws.com/default/jstasks?offset=" + length + "&count=5").then(res => {
        this.setState({ Items: [...this.state.Items, ...res.data], });
      });
    }

  }

  getId = value => {
    axios.get("https://kn4f3kklu4.execute-api.eu-west-1.amazonaws.com/default/jstasks/item?id=" + value).then(res => {
    this.props.setId(res.data);
    
  })

  }
  renderItems = () => {
    return this.state.Items.map((item, key) => (
<div key={key} >
      <Item  thumb={item.thumb} id={item.id} title={item.title} onclick={() => this.getId(item.id)} />
      <div className="ui divider"></div>
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
    <div className="item"  onClick={props.onclick} >
      <div className="ui tiny image">
        <img src={props.thumb} />
      </div>
      <span  className="middle aligned header" >
         {props.title} 
      </span>
    </div>
  );
}