import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import adminRoutes from './routes/admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {
        adminRoutes.map((route, idx) => {
          if (!route.paths) return <Route {...route} key={"route_" + idx} />

          return (
            <Route path={route.path} key={"route_" + idx}>
              {
                route.paths.map((nestedRoute, nestedIdx) => {
                  return <Route {...nestedRoute} key={"route_" + idx + "_" + nestedIdx} />
                })
              }
            </Route>
          )
        })
      }
    </Routes>
  </BrowserRouter>
);
