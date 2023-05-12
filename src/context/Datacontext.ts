import { createContext } from "react";
export const initState: StateType = {
  personalInfo: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  planInfo: {
    title: "",
    price: 0,
    duration: "",
  },
  step: 1,
};
export const reducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case "go_to_second_step":
      return {
        ...state,
        personalInfo: {
          name: action.payload.name,
          email: action.payload.email,
          phoneNumber: action.payload.phoneNumber,
        },
        step: 2,
      };
    case "go_to_third_step":
      return {
        ...state,
        planInfo: {
          title: action.payload.title,
          price: action.payload.price,
          duration: action.payload.duration,
        },
        step: 3,
      };
    case "go_to_previous_step":
      return {
        ...state,
        step: state.step - 1,
      };
    default:
      return state;
  }
};
const initContext: Context = {
  state: initState,
  dispatch: () => {
    console.log("");
  },
};
export const dataContext = createContext(initContext);
