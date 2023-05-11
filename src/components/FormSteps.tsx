
const FormSteps = ({selected , data}:{selected:boolean , data:StepData}) => {
  const classes = selected?'bg-gray-50 text-gray-900':'bg-transparent text-gray-50'  
  return (
    <div className='flex items-center gap-2'>
        <div className={`${classes} w-10 h-10 rounded-full border border-gray-50 text-center flex items-center justify-center`}>{data.number}</div>
        <div className="flex flex-col items-start font-semibold"><span className='text-gray-300'>{data.step}</span><span className='text-gray-50'>{data.title}</span></div>
    </div>
  )
}

export default FormSteps