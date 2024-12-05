
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from './Login';
import Browser from './Browser';

function Body() {
  const user = useSelector((store) => store.app.user);

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: !user ? <Login /> : <Navigate to="/browser" replace />,
    },
    {
      path: '/browser',
      element: user ? <Browser /> : <Navigate to="/" replace />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
