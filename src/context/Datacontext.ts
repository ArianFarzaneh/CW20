import { createContext } from 'react';
export const initState: StateType = {
  personalInfo: {
    name: '',
    email: '',
    phoneNumber: '',
  },
  planInfo: {
    title: '',
    price: 0,
    duration: '',
  },
  addOns: [
    {
      title: 'Online Services',
      price: 0,
      details: 'Access to multiplayer games',
    },
    {
      title: 'Large storage',
      price: 0,
      details: '1T of cloud save',
    },
    {
      title: 'Customizable profile',
      price: 0,
      details: 'Custom theme on your profile',
    },
  ],
  step: 1,
  totalPrice: 0,
};
export const reducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case 'go_to_second_step':
      return {
        ...state,
        personalInfo: {
          name: action.payload.name,
          email: action.payload.email,
          phoneNumber: action.payload.phoneNumber,
        },
        step: 2,
      };
    case 'go_to_third_step':
      return {
        ...state,
        planInfo: {
          title: action.payload.title,
          price: action.payload.price,
          duration: action.payload.duration,
        },
        step: 3,
        totalPrice: action.payload.price,
      };
    case 'go_to_forth_step':
      return {
        ...state,
        addOns: action.payload,
        step: 4,
        totalPrice:
          state.totalPrice +
          action.payload[0].price +
          action.payload[1].price +
          action.payload[2].price,
      };
    case 'go_to_finishUp_step':
      return state;
      case 'go_to_Success_step':
        return {
          ...state,
          step:5
        }
    case 'go_to_previous_step':
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
    console.log('');
  },
};
export const dataContext = createContext(initContext);
