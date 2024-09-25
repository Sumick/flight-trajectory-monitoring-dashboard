// src/redux/flightSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FlightData } from '../types/FlightData';

interface FlightState {
  flights: FlightData[];
}

const initialState: FlightState = {
  flights: [],
};

const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setFlights(state, action: PayloadAction<FlightData[]>) {
      state.flights = action.payload;
    },
  },
});

export const { setFlights } = flightSlice.actions;
export default flightSlice.reducer;
