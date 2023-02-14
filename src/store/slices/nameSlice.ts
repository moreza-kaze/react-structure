import { createSlice } from '@reduxjs/toolkit';

export interface initialStateInterface {
   value: string;
}
const initialState: initialStateInterface = {
   value: 'bouuton number 1'
};

const nameSlice = createSlice({
   name: 'nameSlice',
   initialState,
   reducers: {}
});

export const {} = nameSlice.actions;

export default nameSlice.reducer;
