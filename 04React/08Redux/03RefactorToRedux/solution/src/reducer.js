const initialState = {
  settings: "you"
};

export default function(state = initialState, action) {
  console.log(`Hello from reducer`);
  console.log(action);
  switch (action.type) {
    case "HANDLECHANGE":
      return {
        ...state,
        settings: action.text
      };

    default:
      return state;
  }
}
