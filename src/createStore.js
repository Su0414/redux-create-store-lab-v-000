export default function createStore(reducer) {
  // add your code here
  let state;

  function getState(){
    return state;
  };


  function dispatch(action) {
    state = changeCount(state, action);
    render();
  };

  return {
    dispatch,
    getState
   };
}

function changeCount(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

function render() {
  const container = document.getElementById('container');
  container.textContent = store.getState().count;

}
