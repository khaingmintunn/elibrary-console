import { combineReducers } from '@reduxjs/toolkit';
import { reducer as sampleReducer } from '../slices/sampleSlice';

const rootReducer = combineReducers({
  sample: sampleReducer
});

export default rootReducer;
