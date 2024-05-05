import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/redux/store'

// Define a type for the slice state
interface CounterState {
  value: number,
  isNavVisible: boolean
  NavStyleText: string,
  visibleNav: any
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  isNavVisible: true,
  NavStyleText: "",
  visibleNav: () => {}
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    visibleNav: (state, action: PayloadAction<string>) => {
      state.isNavVisible ? state.isNavVisible = false : state.isNavVisible = true;
      state.NavStyleText = action.payload;
      console.log(action.payload);
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, visibleNav } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counterReducer.value

export default counterSlice.reducer