import  { useContext } from 'react'
import FormSteps from '../components/FormSteps'
import { dataContext } from '../context/Datacontext'
const SideBar = () => {
  const {state}=useContext(dataContext)  
  return (
    <div className='bg-blue-500 pt-28 w-3/12 self-start h-screen p-6 flex flex-col gap-6 items-center'>
        <FormSteps selected={state.step===1} data={{number:1 , step:'STEP1' , title:'YOUR INFO'}} />
        <FormSteps selected={state.step===2} data={{number:2 , step:'STEP1' , title:'YOUR INFO'}} />
        <FormSteps selected={state.step===3} data={{number:3 , step:'STEP1' , title:'YOUR INFO'}} />
        <FormSteps selected={state.step===4} data={{number:4 , step:'STEP1' , title:'YOUR INFO'}} />
    </div>
  )
}

export default SideBar