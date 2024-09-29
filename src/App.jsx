import React from 'react'
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage ,{ jobLoader } from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import MainLayouts from './layouts/MainLayouts';
import AddJobPage from './pages/AddJobPage';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

function App() {
  const addJob=(newJob)=>{
    console.log(newJob);
  }
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/add-job' element={<AddJobPage addSubmitJob={addJob}/>}/>
        <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>;
}
export default App