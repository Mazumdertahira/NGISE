import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Commitee from './pages/Commitee';
import Accomodation from './pages/Accomodation';
import CallForPaper from './pages/CallForPaper.jsx'
import Acceptedpaper from './pages/Acceptedpaper.jsx'
import PaperSubmission from './pages/PaperSubmission.jsx'
import RegistrationFee from './pages/RegistrationFee.jsx'
import FeeSubmission from './pages/FeeSubmission.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/commitee" element={<Commitee />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/registration" element={<RegistrationFee />} />
        <Route path="/fee" element={<FeeSubmission />} />
        <Route path="/papersubmission" element={<PaperSubmission />} />
        <Route path="/callforpaper" element={<CallForPaper />} />
        <Route path='/speakers' element ={<Acceptedpaper/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)