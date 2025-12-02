import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const initialState = { ReduxClass: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    changeElement(state) {
      state.ReduxClass = !state.ReduxClass;
    },
  }
})

export let store = configureStore({
  reducer: {
    boolean: counterSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export let { changeElement } = counterSlice.actions