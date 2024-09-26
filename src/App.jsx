import React from 'react'
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage ,{ jobLoader } from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import MainLayouts from './layouts/MainLayouts';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayouts/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  )
)
function App() {
  return <RouterProvider router={router}/>;
}
export default App