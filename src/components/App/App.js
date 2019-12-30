import React , { Component }from 'react';
import Items from '../items/items';
import ItemView from '../itemView/itemView';
import axios from 'axios';
import './App.css';
export default class App extends React.Component {
  state={
    item:undefined,
    showitem:false
  }
  setId=value=>{
    axios.get("https://kn4f3kklu4.execute-api.eu-west-1.amazonaws.com/default/jstasks/item?id="+value).then(res => {
      this.setState({ item: res.data ,
        showitem:true});
  })
    
  }
back=()=>{
  this.setState({ 
    showitem:false});
}
  render() {
  return (

    <div className="ui container">
{ window.innerWidth >1200 ?  
      <div className="ui horizontal segments computer ">
        <Items  setId={this.setId} />
        <ItemView  item={this.state.item}/>
      </div>
            : this.state.showitem? (<div>
              <button class="ui secondary  basic button" onClick={this.back}>Back</button><ItemView  item={this.state.item}/>
              </div>)
            :(
              <Items  setId={this.setId} />
              )}
      
      
    </div>
  );
}}


