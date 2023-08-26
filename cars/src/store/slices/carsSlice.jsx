import {createSlice, nanoid} from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState:{
        searchTerm: "",
        dataCar:[],
    },
    reducers:{
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state,action){
            state.dataCar.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action){
            const updated = state.dataCar.filter((car)=>{
                return car.id !== action.payload;
            });
            state.dataCar = updated
        }
    }
});

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;