import React, { useContext, useState } from 'react';
import { BsJoystick } from 'react-icons/bs';
import { IoLogoGameControllerA, IoLogoGameControllerB } from 'react-icons/io';
import Toggle from './Toggle';

import { dataContext } from '../context/Datacontext';
import { useForm } from 'react-hook-form';

const plans = {
  monthly: [
    {
      title: 'Arcade',
      price: 9,
      duration: 'mo',
      icon: <BsJoystick />,
      style: 'bg-orange-400',
    },

    {
      title: 'Advanced',
      price: 12,
      duration: 'mo',
      icon: <IoLogoGameControllerA />,
      style: 'bg-pink-400',
    },
    {
      title: 'Pro',
      price: 15,
      duration: 'mo',
      icon: <IoLogoGameControllerB />,
      style: 'bg-blue-600',
    },
  ],
  yearly: [
    {
      title: 'Arcade',
      price: 90,
      duration: 'yr',
      icon: <BsJoystick />,
      style: 'bg-orange-400',
    },

    {
      title: 'Advanced',
      price: 120,
      duration: 'yr',
      icon: <IoLogoGameControllerA />,
      style: 'bg-pink-400',
    },
    {
      title: 'Pro',
      price: 150,
      duration: 'yr',
      icon: <IoLogoGameControllerB />,
      style: 'bg-blue-600',
    },
  ],
};

export default function SelectPlan() {
  const [plan, setPlan] = useState<Plans>('monthly');
  const { dispatch } = useContext(dataContext);
  const { register, handleSubmit } = useForm<setPlan>();
  const handleToggle = (value: boolean) => {
    value ? setPlan('yearly') : setPlan('monthly');
  };
  const onSubmit = (data: setPlan) => {
    dispatch({
      type: 'go_to_third_step',
      payload: JSON.parse(data.plan),
    });
  };
  return (
    <div className="flex flex-col  gap-5">
      <h1 className="font-bold text-3xl">Select Your Plan</h1>
      <p>You The Option Of Monthly or Yearly Billing</p>
      <form className="w-full space-y-10 " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-5 ">
          {plans[plan].map((item) => {
            return (
              <label
                className="relative w-52 h-64 max-w-sm  border rounded-md shadow-md "
                htmlFor={item.price.toString()}
              >
                <div className="absolute flex  flex-col gap-6  z-50 bg-transparent p-6">
                  <div
                    className={`w-16 h-16 rounded-full flex justify-center items-center text-white ${item.style}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <span className="text-gray-400 font-semibold">
                      {item.price + '$/' + item.duration}{' '}
                    </span>
                  </div>
                  <div>{plan === 'yearly' ? <p>2 months free</p> : ''}</div>
                </div>
                <input
                  type="radio"
                  value={JSON.stringify(item)}
                  className="w-full h-full    focus:bg-blue-50 focus:border focus:border-blue-500  appearance-none "
                  id={item.price.toString()}
                  {...register('plan', { required: true })}
                />
              </label>
            );
          })}
        </div>
        <div className="flex w-full items-center justify-center bg-blue-50 rounded-md">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-xl">Monthly</span>
            <Toggle handleToggle={handleToggle} />
            <span className="font-semibold text-xl">Yearly</span>
          </div>
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
          <button className=" py-3 px-5 bg-blue-900 text-white rounded-md text-xl self-end w-32">
            {'Next Step'}
          </button>
        </div>
      </form>
    </div>
  );
}
