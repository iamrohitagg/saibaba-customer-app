import { createAsyncThunk } from '@reduxjs/toolkit';

// Sample Mock API function
const mockApiCall = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from the sample API! Data fetched successfully.");
    }, 1500); // Simulate network delay
  });
};

export const fetchSampleData = createAsyncThunk(
  'sample/fetchData',
  async () => {
    const response = await mockApiCall();
    return response;
  }
);
