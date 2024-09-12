import { Provider } from 'react-redux';
import ReactReduxComponent from './ReactReduxComponent';
import { rootReducer } from "./store"

// Must install react-redux, @reduxjs/tookit, and Thunk
function ReactReduxEg() {
  return (
    <Provider store={rootReducer}>
      <ReactReduxComponent />
    </Provider>
  )
}

export default ReactReduxEg;