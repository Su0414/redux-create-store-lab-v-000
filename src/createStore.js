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

function render() {
  const container = document.getElementById('container');
  container.textContent = state.count;

}
