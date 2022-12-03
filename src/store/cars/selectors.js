const selectCars = (state) => state.back.cars;
const searchingCars = (state) => state.back.searchedCars;
const selectPageCars = (state) => state.back.pageCars;

const selectedCars = (state) => state.back.selectedCars;
const selectedCarsCounterSelector = (state) => selectedCars(state).length;

const selectAllCarsSelector = (state) => state.back.selectedCars;
const deselectAllCarsSelector = (state) => state.back.selectedCars;

const page = (state) => state.back.page;

export { selectCars, searchingCars, selectPageCars, selectedCars, selectedCarsCounterSelector, 
    selectAllCarsSelector, deselectAllCarsSelector, page};