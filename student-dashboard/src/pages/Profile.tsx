import { useReducer } from "react";
type ProfileState = {
  name: string;
  email: string;
  step: number;
};

type Action =
  | { type: "SET_NAME"; payload: string } //union type having action as SET_NAME and payload(the value to be set) as string
  | { type: "SET_EMAIL"; payload: string }
  | { type: "NEXT_STEP" };

export default function Profile() {
  const initialState: ProfileState = {
    name: "",
    email: "",
    step: 1,
  };
  const [state, dispatch] = useReducer(profileReducer, initialState);
  function profileReducer(state: ProfileState, action: Action): ProfileState {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      case "NEXT_STEP":
        return { ...state, step: state.step + 1 };

      default:
        return state;
    }
  }
  return (
    <>
      <div>
        <h2>Profile setup</h2>
        {state.step == 1 && (
          <div>
            <input
              type="text"
              placeholder="Enter name"
              value={state.name}
              onChange={(e) => {
                dispatch({ type: "SET_NAME", payload: e.target.value });
              }}
            />
          </div>
        )}
        {state.step===1 && (  //like a confition
        <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
          Next Step
        </button>)}
        {state.step == 2 && (
          <div>
            <input
              type="text"
              placeholder="Enter email"
              value={state.email}
              onChange={(e) => {
                dispatch({ type: "SET_EMAIL", payload: e.target.value });
              }}
            />
            <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
              Finish
            </button>
          </div>
        )}
      </div>
    </>
  );
}
