import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from './pages/LoginPage'
import AppLayout from './components/layouts/AppLayout'
import DashboardPage from './pages/DashboardPage'
import UserPage from './pages/UserPage'
import DashboardCreatorPage from './pages/creator/DashboardCreatorPage'
import CreatorLayout from './components/layouts/CreatorLayout'
import ChannelCreatorPage from './pages/creator/ChannelCreatorPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<AppLayout />}>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/users' element={<UserPage/>} />
        </Route>
        <Route element={<CreatorLayout  />}>
          <Route path='/creator/dashboard' element={<DashboardCreatorPage/>} />
          <Route path='/creator/channels' element={<ChannelCreatorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
