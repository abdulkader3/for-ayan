import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Dashboard from './Pages/Dashboard'
import Revenue from './Pages/Revenue'
import Analytics from './Pages/Analytics'
import Inventory from './Pages/Inventory'
import Notifications from './Pages/Notifications'

function App() {
const mainRouter =  createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='/about' element={<Revenue/>}/>
      <Route path='/projects' element={<Analytics/>}/>
      <Route path='/skills' element={<Inventory/>}/>
      <Route path='/contact' element={<Notifications/>}/>
      </Route>
    </Route>
  )
)

  return (
    <>
    <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
