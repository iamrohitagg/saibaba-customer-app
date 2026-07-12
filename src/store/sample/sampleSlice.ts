import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSampleData } from './sampleOperations';

interface SampleState {
  data: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: SampleState = {
  data: null,
  loading: false,
  error: null,
};

const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    clearData: (state) => {
      state.data = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSampleData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSampleData.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSampleData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export const { clearData } = sampleSlice.actions;
export default sampleSlice.reducer;
