import React , { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component{
  render(){
    if(!this.props.car){
      return(
        <p>details was render</p>
      )
    }
    return(
      <div>
        <h2>{this.props.car.model}</h2>
        <img src={this.props.car.img}/><br/>
      </div>
    )
  }
}

function mapStateToProps(state){ //приводим состояние к свойству
    return{
        car: state.active
    }
}

export default connect (mapStateToProps)(Details);
