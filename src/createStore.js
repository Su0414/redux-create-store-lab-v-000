export default function createStore(reducer) {
  // add your code here
  let state;
  function getState(){
    return this.state;
  };


  function dispatch(action) {
    state = changeCount(state, action);
    render();
  };

  return { dispatch };
}

function render() {
  const container = document.getElementById('container');
}
