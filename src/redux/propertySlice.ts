// propertySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';
import { Property, PropertyState } from '../interfaces/propertyTypes';

const back = import.meta.env.VITE_REACT_APP_BACK;

const initialState: PropertyState = {
  properties: [],
};

const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<Property[]>) => {
      state.properties = action.payload;
    },
  },
});

export const { setProperties } = propertySlice.actions;

// Thunk para obtener las properties desde el servidor
export const getProperties = () => async (dispatch: AppDispatch) => {
  try {
    console.log('Fetching properties from:', `${back}properties`);
    const response = await fetch(`${back}properties`);
    const text = await response.text();
    console.log('Received data:', text);
    const data = JSON.parse(text);
    dispatch(setProperties(data));
  } catch (error) {
    console.error('Error fetching properties:', error);
  }
};

// Selector para acceder al estado de las properties
export const selectProperties = (state: RootState) => state.properties.properties;

export default propertySlice.reducer;
