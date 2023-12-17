import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import Homepage from './pages/homepage/Homepage.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import PageNotFound from './pages/pagenotfound/PageNotFound.jsx'
import About from './pages/about/About.jsx'
import Blog from './pages/blog/Blog.jsx'
import BlogDetails from './pages/blogDetails/BlogDetails.jsx'
import CreatePost from './pages/createPost/CreatePost.jsx'

import { Provider } from 'react-redux'
import store from './store.js'
import Layout from './Layout.jsx'

function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' index={true} element={<Homepage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/createPost' element={<CreatePost />}></Route>
        <Route path='/blogDetails/:id' element={<BlogDetails />}></Route>
      </Route>
    )
  )

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
