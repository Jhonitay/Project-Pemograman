import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom'
import RootLayout from '../views/layouts/RootLayout'
import Homepage from '../views/pages/Homepage.jsx'
import Root from '../views/layouts/Root'
import Dashboard from '../views/layouts/Dashboard.jsx'
import Packages from '../views/pages/Dashboard/Packages.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Root />}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to={'packages'} />} />
            <Route path="packages" element={<Packages />}></Route>
          </Route>
        </Route>
      </Route>
    </>,
  ),
)

export default router
