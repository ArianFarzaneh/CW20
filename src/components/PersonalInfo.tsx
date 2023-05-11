import { useContext } from 'react';
import { useForm ,SubmitHandler } from 'react-hook-form'
import { dataContext } from '../context/Datacontext';
const PersonalInfo = () => {
  const {dispatch}=useContext(dataContext)    
  const {register , handleSubmit, formState: { errors }} =  useForm<InfoType>();
  const onSubmit: SubmitHandler<InfoType> =(data:InfoType)=>
  {
    dispatch({
        type:'go_to_second_step',
        payload:{...data}})
  }
  return (
    <div className='py-3 px-5 flex flex-col items-center gap-4 w-9/12'>
        <h2 className='font-bold text-2xl self-start'>Personal Info</h2>
        <p className='self-start'>please enter your name:</p>
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[500px] flex flex-col gap-3 w-full self-start'>
            <div className="flex flex-col w-full gap-3">
                <label htmlFor="">Name</label>
                <input className='border border-black p-1' type="text" placeholder='e.g. stephan king' {...register("name", { required: true })}/>
                {errors.name && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className="flex flex-col w-full gap-3">
                <label htmlFor="">Email Adress</label>
                <input className='border border-black p-1' type="email" placeholder='e.g. stephan king@gmail.com' {...register("email", { required: true })}/>
                {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className="flex flex-col w-full gap-3">
                <label htmlFor="">Phone Number</label>
                <input className='border border-black p-1' type="tel" placeholder='34543151' {...register("phoneNumber", { required: true })}/>
                {errors.phoneNumber && <span className='text-red-500'>This field is required</span>}
            </div>
            <button className=' py-3 px-5 bg-blue-900 text-white rounded-md text-xl self-end w-32'>Next Step</button>
        </form>
    </div>
  )
}

export default PersonalInfo