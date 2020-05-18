import { createAction, createReducer } from '../../utils';

// Types
export const types = {
  INCREMENT: 'counter/INCREMENT',
  RESET: 'counter/RESET',
};

// Actions
export const incrementCounter = (inc = 1) => createAction(types.INCREMENT, { inc });
export const resetCounter = () => createAction(types.RESET);

// Reducer
const initialState = {
  count: 0,
};

const handlers = {
  [types.INCREMENT]: (state, { inc }) => ({
    ...state,
    count: state.count + inc,
  }),
  [types.RESET]: () => initialState,
};

export default createReducer(initialState, handlers);
