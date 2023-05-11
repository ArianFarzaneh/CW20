import {useReducer } from 'react'
import PersonalInfo from './components/PersonalInfo'
import SideBar from './layouts/SideBar'
import { reducer , initState , dataContext} from './context/Datacontext'
function App() {
const [state, dispatch]=useReducer(reducer,initState)
console.log(state);

  return (
    <>
      <div className="flex gap-16 w-full items-center justify-start">
        <dataContext.Provider value={{state,dispatch}}>
          <SideBar />
          <PersonalInfo />
        </dataContext.Provider>
      </div>
    </>
  )
}

export default App
