import { createContext } from "react"
export const initState:StateType={
    personalInfo:{
        name:'',
        email:'',
        phoneNumber:''
    },
    step:1
}
export const reducer=(state:StateType , action:Action)=>
{
    switch(action.type)
    {
        case 'go_to_second_step':
            return {...state , 
                personalInfo:{
                    name:action.payload.name,
                    email:action.payload.email,
                    phoneNumber:action.payload.phoneNumber
                },
                step:2}
        default:
            return state        

    }

}
const initContext:Context = {state:initState , dispatch:(()=>{console.log('');
})}
export const dataContext = createContext(initContext)