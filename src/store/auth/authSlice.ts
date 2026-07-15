import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  hasSelectedLanguage: boolean;
  language: 'en' | 'hi';
}

const initialState: AuthState = {
  isLoggedIn: false,
  hasSelectedLanguage: false,
  language: 'en',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    setLanguage: (state, action: PayloadAction<'en' | 'hi'>) => {
      state.language = action.payload;
    },
    completeLanguageSelection: (state) => {
      state.hasSelectedLanguage = true;
    }
  },
});

export const { setIsLoggedIn, logout, setLanguage, completeLanguageSelection } = authSlice.actions;

export default authSlice.reducer;

