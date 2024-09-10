import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AxiosComponent } from "./components/Api/AxiosMethod";
//import RouterClass from "./components/react-router-class/lazy-loading/router-class";
import { TailwindClass } from "./components/TaiwoClass/firstClass";
import { NavBar } from "./components/TaiwoClass/Navbar";
import { SignUp } from "./components/Forms/Signup";
import UseReducerClass from './components/useReducerHook/useReducerBasic';
import FuncComp from './components/useReducerHook/useReducer';
import { ThemeComponent } from './components/manageTheme';
//new router shipped to v6.4 of react-router-dom
//here we create the router outside any React component 

const router = createBrowserRouter([
  //notice the difference in the home route. keeping /api out of the children object makes it an independent route.
  {
    path: '/',
    element: <>
      <NavBar />
      <TailwindClass />
    </>,
    children: [
      {
        path: 'class',
        element: <TailwindClass />,
      },
    ],
  },
  {
    path: 'signup',
    element: <>
      <NavBar />
      <SignUp />
    </>
  },
  {
    path: 'product/:id',
    element: <AxiosComponent />
  },
  {
    path: 'product',
    element: <AxiosComponent />

  },
  {
    path: 'cart',
    element: <UseReducerClass />

  },
  {
    path: 'cart/checkout',
    element: <FuncComp />

  },


]);

export default function App() {

  return (
    <ThemeComponent>
      <div>
      <RouterProvider router={router} />
    </div>
    </ThemeComponent>
    
  );
}


//Let's start the firebase as a new app.
// App.js
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from "./components/useContextClass/AuthContext";
// import SignUp from './components/useContextClass/signup';
// import SignIn from './components/useContextClass/signin';
// import Profile from './components/useContextClass/userprofile';

// const ProtectedRoute = ({ children }) => {
//   const { user, loading } = useAuth();

//   if (loading) return <p>Loading...</p>;
//   if (!user) return <Navigate to="/login" />;

//   return children;
// };

// const App = () => {
//   return (
//     <Router>
//       <AuthProvider>
//         <Routes>
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<SignIn />} />
//           <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// };

// export default App;




//older method of defining route. still in use though

// import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
// import { TailwindClass } from "./components/TaiwoClass/firstClass";
// import {SignUp} from "./components/Forms/Signup"
// function App() {

//   return(
//  <Router>
//   <Routes>
//     <Route path="/" element={<TailwindClass/>}/>
//     <Route path="/signup" element={<SignUp/>}/>

//   </Routes>
//  </Router>
//   )
// }
// export default App;