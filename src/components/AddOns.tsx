import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { dataContext } from '../context/Datacontext';

const addOns = [
  {
    title: 'Online Services',
    mo: 1,
    yr: 10,
    details: 'Access to multiplayer games',
    name: 'os',
  },
  {
    title: 'Large storage',
    mo: 2,
    yr: 20,
    details: '1T of cloud save',
    name: 'ls',
  },
  {
    title: 'Customizable profile',
    mo: 2,
    yr: 20,
    details: 'Custom theme on your profile',
    name: 'cp',
  },
];
function AddOns() {
  const { state, dispatch } = useContext(dataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlanType>();
  const onSubmit = (data) => {
    console.log(data);

    dispatch({
      type: 'go_to_forth_step',
      payload: [
        {
          title: 'Online Services',
          price: data.os ? +data.os : 0,
          details: 'Access to multiplayer games',
        },
        {
          title: 'Large storage',
          price: data.ls ? +data.ls : 0,
          details: '1T of cloud save',
        },
        {
          title: 'Customizable profile',
          price: data.cp ? +data.cp : 0,
          details: 'Custom theme on your profile',
        },
      ],
    });
  };
  return (
    <div className="flex flex-col  gap-5 px-32 w-full">
      <h1 className="font-bold text-3xl">Pick add-ons</h1>
      <p></p>
      <form className="w-full space-y-10 " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-5 flex-col w-full">
          {addOns.map((item) => {
            return (
              <label
                htmlFor={item.name}
                className="relative w-full p-4 border rounded-md shadow-md flex item-center gap-5 justify-between hover:border hover:border-blue-500"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    value={JSON.stringify(item[state.planInfo.duration])}
                    id={item.name}
                    {...register(item.name)}
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold">{item.title}</h3>
                    <p>{item.details}</p>
                  </div>
                </div>

                <span className="self-center font-bold">{`+$${
                  item[state.planInfo.duration]
                }/${state.planInfo.duration}`}</span>
              </label>
            );
          })}
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

export default AddOns;
