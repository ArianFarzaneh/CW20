import { useContext } from 'react';
import { dataContext } from '../context/Datacontext';
import axios from 'axios';

function FinishUp() {
  const { state, dispatch } = useContext(dataContext);
  const handleConfirm = () => {
    dispatch({
      type: 'go_to_Success_step',
    });
    axios.post(' http://localhost:5000/users', state);
  };
  return (
    <div className="flex flex-col  gap-5 px-32 w-full ">
      <h1 className="font-bold text-3xl">Finishinng up</h1>
      <p>Double-Check every thing looks OK before Confiming</p>
      <div className="w-full bg-gray-200 rounded-md p-6">
        <div className=" border-b-2 border-gray-400 flex w-full justify-between items-center pb-4">
          <div className="flex flex-col gap-1">
            <span>{`${state.planInfo.title} ${
              state.planInfo.duration === 'yr' ? 'yearly' : 'monthly'
            }`}</span>
            <a href="" className="">
              <span>Change</span>
            </a>
          </div>
          <div>{`${state.planInfo.price}$/${state.planInfo.duration}`}</div>
        </div>
        <div className="flex flex-col gap-5 pt-4">
          {state.addOns.map((item) => {
            return (
              <div className="flex w-full justify-between items-center">
                <span>{item.title}</span>
                <span>{`+${item.price}$${
                  item.price !== 0 ? '/' + state.planInfo.duration : ''
                }`}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full justify-between items-center py-6">
        <span>{`Total (per${
          state.planInfo.duration === 'yr' ? 'year' : 'month'
        })`}</span>
        <span className="text-blue-700">{`${state.totalPrice}$`}</span>
      </div>
      <div className="flex w-full justify-between items-center ">
        <button
          onClick={() => {
            dispatch({
              type: 'go_to_previous_step',
            });
          }}
          type="button"
        >
          {' Go Back'}
        </button>
        <button
          onClick={handleConfirm}
          className=" py-3 px-5 bg-blue-900 text-white rounded-md text-xl self-end w-32"
        >
          {'Confirm'}
        </button>
      </div>
    </div>
  );
}

export default FinishUp;
