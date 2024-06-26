import Home from "./components/home";
import Login from "./components/login"
import Register from "./components/register";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
        <>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        </>
        )
    )

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
