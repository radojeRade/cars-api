import { createSlice } from '@reduxjs/toolkit';

function recalculateCars(state) {
    state.searchedCars = state.cars.filter(el => el.brand.includes(state.searchTerm) || el.model.includes(state.searchTerm));
    
    let indexOfLastCar = state.page.pageNumber * state.page.itemPerPage;
    let indexOfFirstCar = indexOfLastCar - state.page.itemPerPage;
    state.pageCars = state.searchedCars.slice(indexOfFirstCar, indexOfLastCar); 
}

export const carsSlice = createSlice({
    name: 'back',
    initialState: {
        cars: [],
        searchedCars: [],
        selectedCars: [],
        pageCars: [],
        page: {
            pageNumber: 1,
            itemPerPage: 3,
        },
       searchTerm: '',
        
    },
    reducers: {
        setCars: (state, action) => {
            state.cars = [...action.payload];
            // state.searchedCars = [...action.payload];
            recalculateCars(state);
        },
        searchCars: (state, action) => {
            // state.searchedCars = state.cars.filter(el => el.brand.includes(action.payload) || el.model.includes(action.payload))
            state.page.pageNumber = 1;
            state.searchTerm = action.payload;
            recalculateCars(state);
        },
        selectedCarsAction: (state, action) => {
            state.selectedCars.push(action.payload);
            
        },
        selectAllCarsAction: (state, action) => {
            state.selectedCars = state.searchedCars.map(el => el.id);
        },
        deselectAllCarsAction: (state, action) => {
            state.selectedCars = [];
        },
        changePage: (state, action) => {
            
                state.page.pageNumber = action.payload;
                // state.page.itemPerPage = action.payload.items || 2;  za ovo ide jos jedna akcija
                // let indexOfLastCar = state.page.pageNumber * state.page.itemPerPage;
                // let indexOfFirstCar = indexOfLastCar - state.page.itemPerPage;
                // state.searchedCars = state.cars.slice(indexOfFirstCar, indexOfLastCar); 
                recalculateCars(state);
        }
        
    }
});

export const { setCars, searchCars, selectedCarsAction, selectedCarsCounter, selectAllCarsAction,
                 deselectAllCarsAction, changePage } = carsSlice.actions;

export default carsSlice.reducer;