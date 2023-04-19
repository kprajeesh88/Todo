import DashboardAside from "./DashboardAside"
import DashboardMain from "./DashboardMain"
import { useContext } from "react"
import { DashboardDataContext, DashboardDispatchContext } from "../../contexts/DashboardContext"

const Dashboard = ()=>{

    const dashboardData = useContext(DashboardDataContext);
    const dispatch = useContext(DashboardDispatchContext);
    
    
    //Handle Move
    const handleMove = (id)=>{
        dispatch({type: "MOVE_TO_FINISHED", payload:id})
    }

    //Handle Delete
    const handleDelete = (id)=>{
        dispatch({type: "DELETE", payload:id})
    }

    return(
        <div className="flex-row">
            <DashboardMain dashboardData={dashboardData} handleMove={handleMove} handleDelete={handleDelete}/>
            <DashboardAside dashboardData={dashboardData}  />
        </div>
    )
}

export default Dashboard