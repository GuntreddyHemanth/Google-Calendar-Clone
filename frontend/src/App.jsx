import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './Home';
import { RedirectToSignIn, SignedIn, SignedOut, useAuth } from '@clerk/clerk-react';
import Dashboard from './dashboard';


function RedirectedIfSignedIn({children}) {
  const {isSignedIn} = useAuth()
  if (isSignedIn) {
    return <Navigate to="/dashboard" replace/>
  }
  return children;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={
        <RedirectedIfSignedIn>
            <Home />
        </RedirectedIfSignedIn>
        } />
      <Route
        path="/dashboard"
        element={
          <>
            <SignedIn>
              <Dashboard/>
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn/>
            </SignedOut>
          </>
        }
      />
      <Route
      path="/sign-in"
      element={
        <RedirectedIfSignedIn>
           <div>sig-in Page</div>
        </RedirectedIfSignedIn>
      }
      />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;