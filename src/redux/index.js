import * as redux from 'redux';



//Actions
export const COUNTER_INCREMENT = 'increment';
export const COUNTER_DECREMENT = 'decrement';

const intialState = {
    count: 0,
}


const reducer = (state = intialState, action) => {

    switch (action.type) {
        case COUNTER_INCREMENT: {

            return { ...state, count: state.count + 1 };
            break;
        }
        case COUNTER_DECREMENT: {
            return { ...state, count: state.count - 1 };
            break;
        }
    }

}


  const Store =redux.createStore(reducer);
  export default Store