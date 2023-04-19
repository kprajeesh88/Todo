import { createContext, useReducer } from 'react'
import { dashboardData } from '../globalData/dashboardData';

export const DashboardDataContext = createContext();
export const DashboardDispatchContext = createContext();

function DashboardContext({children}){

    const reducerCallback = (stateValue, {type, payload}) =>{
        switch(type){
            case "MOVE_TO_FINISHED":
               const finalState = stateValue.map((item)=> (item.id === payload ? {...item, status: true} : item));
                return finalState;

           case "DELETE":
                const updatedState = stateValue.filter((delItem)=> delItem.id != payload) 
                return updatedState ;
        }
    }
    const [data, dispatch] = useReducer(reducerCallback, dashboardData);
   
    return(
        <DashboardDataContext.Provider value={data}>
            <DashboardDispatchContext.Provider value={dispatch}>
                {children}
            </DashboardDispatchContext.Provider>
        </DashboardDataContext.Provider>
    )
}

export default DashboardContext