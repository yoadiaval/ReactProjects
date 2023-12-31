import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";


const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      console.log(action)
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  //cdo se presione el botton de add form tiene que estar al tanto para limpiar los valores que est'an puestos en el input
  
  extraReducers(builder){
    builder.addCase(addCar,(state,action)=>{
      state.name = " ";
      state.cost = 0;
    })
  }
});

export const {changeName, changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;