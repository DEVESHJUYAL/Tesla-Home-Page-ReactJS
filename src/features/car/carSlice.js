import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Vehicles", "Energy", "Charging", "Discover", "Shop"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
