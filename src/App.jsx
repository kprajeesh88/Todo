import './App.css'
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardContext from './contexts/DashboardContext';

function App() {

  return (
    <div className="App">
      <DashboardContext>
        <Dashboard/>
      </DashboardContext>
    </div>
  )
}

export default App
