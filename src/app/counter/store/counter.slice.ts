import { createSlice, noopReducer, PayloadAction } from "ngrx-slice";

export interface CounterState {
  value: number;
  incrementCount: number;
  decrementCount: number;
}

export const initialState: CounterState = {
  decrementCount: 0,
  incrementCount: 0,
  value: 1,
};

export const {
  actions: CounterActions,
  selectors: CounterSelectors,
  ...CounterFeature
} = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Record<string, ...>
    increment: (state) => {
      state.value++;
      state.incrementCount++;
    },
    decrement: (state) => {
      state.value--;
      state.decrementCount++;
    },
    multiplyBy: {
      success: (state, { value }: PayloadAction<{ value: number }>) => {
        state.value = value;
      },
      trigger: noopReducer(),
    },
  },
});
