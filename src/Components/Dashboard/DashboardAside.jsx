const DashboardAside = ({dashboardData}) =>{
    return(
        
        <div className="flex-item" style={{width:"30%", marginLeft:"20px"}}>
            <h2>Finished Tasks</h2>
            {dashboardData.map(({id, title, desc, status})=>(
               status === true ? (<div className="task-item" key={id}>
               <h3>{title}</h3>
               <p>{desc}</p>
               <button>Completed</button>
           </div>) : null
            ))}
        </div>
    )
}

export default DashboardAside