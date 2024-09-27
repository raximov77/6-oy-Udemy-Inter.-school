import './App.css'
import LoginRoutes from "./routes/LoginRoutes"
import DashboardRoutes from './routes/DashboardRoutes'
import { useContext } from 'react'
import { Context } from './context/AuthContext'

function App() {
    const {token} = useContext(Context)
    if(token){
      return <DashboardRoutes/>
    }
    else{
      return <LoginRoutes/>
    }
}

export default App
