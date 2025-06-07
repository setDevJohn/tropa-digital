import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { NavLayout } from '../components/NavLayout';

import { routeList } from './routeList';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/login" />} />
      {routeList.public.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />)
      )}
 
      <Route path="/" element={ <NavLayout/> }>
        {routeList.private.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />)
        )}
      </Route>
    </Routes>
  </BrowserRouter>
);