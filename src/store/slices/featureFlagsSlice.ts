import { createSlice } from '@reduxjs/toolkit';

interface FeatureFlagsState {
  disablePage1: boolean;
  disableSlider: boolean;
}

const initialState: FeatureFlagsState = {
  disablePage1: false,
  disableSlider: false,
};

const featureFlagsSlice = createSlice({
  name: 'featureFlags',
  initialState,
  reducers: {
    togglePage1: (state) => {
      state.disablePage1 = !state.disablePage1;
    },
    toggleSlider: (state) => {
      state.disableSlider = !state.disableSlider;
    },
  },
});

export const { togglePage1, toggleSlider } = featureFlagsSlice.actions;
export default featureFlagsSlice.reducer;
