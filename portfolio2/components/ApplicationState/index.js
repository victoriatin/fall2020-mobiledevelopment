// Create a global state to be shared across the application
let state = {
    count: 0
  };
  
  // Create a "reducer" function
  //
  // Unlike setState() or useState(), 
  //  it accepts the current state, changes it, and then returns control.
  //
  // It just "reduces" a value. Nothing more.
  //
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      case 'reset' :
        return {count: state.count = 0};
      default:
        throw new Error();
    }
  }
  
  export {state, reducer};
  