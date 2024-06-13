import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'
import RootLayout from '../views/layouts/RootLayout'
import Homepage from '../views/pages/Homepage.jsx'
import Root from '../views/layouts/Root'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Root />}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Homepage />}></Route>
        </Route>
      </Route>
    </>,
  ),
)

export default router
