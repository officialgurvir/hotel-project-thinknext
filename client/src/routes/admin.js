import App from "../App";
import Dashboard from "../pages/admin/Dashboard";

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    paths: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        element: <Dashboard />
      },
      {
        path: 'settings',
        name: 'Dashboard',
        element: <Dashboard />
      }
    ]
  }
]

export default routes;