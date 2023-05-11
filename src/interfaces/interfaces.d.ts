type InfoType={
    name:string;
    email:string;
    phoneNumber:string;
}

type StateType = {
    personalInfo:InfoType;
    step:number;
}

type Action ={
    type:'go_to_second_step';
    payload:InfoType;
}

type Dispatch=(value:Action)=>void

type Context = {
    state:StateType;
    dispatch:Dispatch;
}

type StepData = {
    number:number;
    step:string;
    title:string;
}