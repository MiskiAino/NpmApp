import { combineReducers } from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';

const allReducer = combineReducers({
    cars: CarsReducers,
    active: ActiveCar
});

export default allReducer;
