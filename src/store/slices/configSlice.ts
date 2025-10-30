import { createSlice } from '@reduxjs/toolkit';

interface ConfigState {
  tableRows: number;
}

const initialState: ConfigState = {
  tableRows: 5,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setTableRows: (state, action) => {
      state.tableRows = action.payload;
    },
  },
});

export const { setTableRows } = configSlice.actions;
export default configSlice.reducer;
