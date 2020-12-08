import React, { useReducer, useRef } from 'react';


// Create a 'initialtState' object 
const initialState = {
  // Create a global state to be shared across the application
  //products array is empty to track exercises
 workout: {
    name: "Log Workouts For Today",
    products: []
  },
  //array list of workouts from the tracker that the user can add/remove for 'products' array
  store: [
    { id: 1, name: "Ran Laps" },
    { id: 2, name: "Lifted Weights"},
    { id: 3, name: "Pushups"},
    { id: 4, name: "Jumped Rope"}
  ]
};

// Create a "reducer" function
const reducer = (state, action) => {
  switch (action.type) {
    //removal of item after adding it
    case "REMOVE_ITEM":
      return {
        ...state,
        workout: { ...state.workout, products: state.workout.products.filter((x) => x.id !== action.item.id)},
        store: [...state.store, action.item]
      };
      //adding item
    case "BUY_ITEM":
      return {
        ...state,
        workout: { ...state.workout, products: [...state.workout.products, action.item] },
        store: state.store.filter((x) => x.id !== action.item.id)
      }
    default:
      return state;
  }
}

const LogWorkout = () => {
  const inputRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const removeProduct = (item) => {
    dispatch({ type: 'REMOVE_ITEM', item });
  }
  
  const buyItem = (item) => {
    dispatch({ type: 'BUY_ITEM', item })
  }
  
  //button for removeProduct (x button) using dispatch function
    //button for addItem (Add button) using dispatch function
  return (
      <div className="box">
        <h2>{state.workout.name}</h2>
        <div className="content">
          <h4>Add Completed Exercises:</h4>
          {state.workout.products.length ? 
            (
              <ol type="1">
                {state.workout.products.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => removeProduct(item)}
                      className="button">X
                    </button>
                    {item.name}
                  </li>
                ))}
              </ol>
            ) : <p>Hope you had a great workout!</p>
          }
      
      </div>

      <div className="box">
        <div className="content">
          <h4>Completed Exercises:</h4>
          {state.store.length ? 
            (
            <ol type="1">
              {state.store.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => buyItem(item)}
                    className="button">Add</button>
                  {item.name} 
                </li>
              ))}
            </ol>
            ) : <p>You completed all workouts!</p>
          }
        </div>

        
      </div>
    </div>
  );
}

export default LogWorkout;