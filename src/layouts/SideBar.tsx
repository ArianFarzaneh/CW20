import { useContext } from "react";
import FormSteps from "../components/FormSteps";
import { dataContext } from "../context/Datacontext";
const SideBar = () => {
  const { state } = useContext(dataContext);
  return (
    <div className="bg-blue-500 pt-52 w-3/12 self-start h-screen p-6 pl-10  flex flex-col gap-6 items-start ">
      <FormSteps
        selected={state.step === 1}
        data={{ number: 1, step: "STEP1", title: "YOUR INFO" }}
      />
      <FormSteps
        selected={state.step === 2}
        data={{ number: 2, step: "STEP2", title: "SELECT PLAN" }}
      />
      <FormSteps
        selected={state.step === 3}
        data={{ number: 3, step: "STEP3", title: "ADD-ONS" }}
      />
      <FormSteps
        selected={state.step === 4}
        data={{ number: 4, step: "STEP4", title: "SUMMARY" }}
      />
    </div>
  );
};

export default SideBar;
