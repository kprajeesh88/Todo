const DashboardMain = ({dashboardData, handleMove, handleDelete})=>{

     return(
        <div className="flex-item" style={{width:"70%"}}>
            <h2>Today's Tasks</h2>
            {dashboardData?.map(({id, title, desc, status})=>(
                !status ? (
                    <div className="task-item" key={id}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <button onClick={()=>handleMove(id)}>Pending</button>
                    <button onClick={()=>handleDelete(id)}>Delete</button>
                </div>
                ): null
            ))}
            
        </div>
    )
}

export default DashboardMain