type InfoType = {
  name: string;
  email: string;
  phoneNumber: string;
};
type PlanType = {
  plan: {
    title: string;
    price: number;
    duration: string;
  };
};

type AddOnsType = {
  title: string;
  price: number;
  details: string;
};

type StateType = {
  personalInfo: InfoType;
  step: number;
  planInfo: {
    title: string;
    price: number;
    duration: string;
  };
  addOns: AddOnsType[];
  totalPrice: number;
};

type Action =
  | {
      type: 'go_to_second_step';
      payload: InfoType;
    }
  | {
      type: 'go_to_third_step';
      payload: {
        title: string;
        price: number;
        duration: string;
      };
    }
  | {
      type: 'go_to_forth_step';
      payload: AddOnsType[];
    }
  | {
      type: 'go_to_finishUp_step';
    }
  | {
      type: 'go_to_Success_step';
    }
  | {
      type: 'go_to_previous_step';
    };

type Dispatch = (value: Action) => void;

type Context = {
  state: StateType;
  dispatch: Dispatch;
};

type StepData = {
  number: number;
  step: string;
  title: string;
};
type Plans = 'monthly' | 'yearly';
type setPlan = {
  plan: string;
};
