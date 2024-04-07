import { RouterProvider } from "react-router-dom"
import Routing  from "./Routing"
function App() {
  

  return (
    <RouterProvider router={Routing()} />
  )
}

export default App
