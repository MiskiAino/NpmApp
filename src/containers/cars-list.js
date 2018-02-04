import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';

class CarsList extends Component {
    showList(){
        return this.props.cars.map((car)=>{
            return(
                <li onClick={()=> this.props.select(car)} key={car.id}>{car.model}</li>
            );
        });
    }

    render(){
        return(
            <ol>
                {this.showList()}
            </ol>
        );
    }
}

function mapStateToProps(state){ //приводим состояние к свойству
    return{
        cars: state.cars
    }
}
function matchDispatchToProps(dispatch){ // из cation creator
    return bindActionCreators({select: select}, dispatch) //приводим функцию к свойству
}


export default connect(mapStateToProps, matchDispatchToProps)(CarsList);
