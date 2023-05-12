import { ReactNode, useReducer } from 'react';
import PersonalInfo from './components/PersonalInfo';
import SideBar from './layouts/SideBar';
import { reducer, initState, dataContext } from './context/Datacontext';
import SelectPlan from './components/SelectPlan';
import AddOns from './components/AddOns';
import FinishUp from './components/FinishUp';
import SuccessPage from './components/SuccessPage';
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);
  const handlePages = (page: number): ReactNode => {
    switch (page) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <AddOns />;
      case 4:
        return <FinishUp />;
      case 5:
        return <SuccessPage />;

      default:
        return page;
    }
  };

  return (
    <>
      <div className="flex gap-16 w-full items-center justify-start">
        <dataContext.Provider value={{ state, dispatch }}>
          <SideBar />
          {handlePages(state.step)}
        </dataContext.Provider>
      </div>
    </>
  );
}

export default App;
