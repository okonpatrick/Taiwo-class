import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AxiosComponent } from "./components/Api/AxiosMethod";
//import RouterClass from "./components/react-router-class/lazy-loading/router-class";
import { TailwindClass } from "./components/TaiwoClass/firstClass";
import { NavBar } from "./components/TaiwoClass/Navbar";
import { SignUp } from "./components/Forms/Signup";
import UseReducerClass from './components/useReducerHook/useReducerBasic';
import FuncComp from './components/useReducerHook/useReducer';

//new router shipped to v6.4 of react-router-dom
//here we create the router outside any React component 

const router = createBrowserRouter([
  //notice the difference in the home route. keeping /api out of the children object makes it an independent route.
  {
    path: '/home',
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
    <NavBar/>
    <SignUp/>
</>
  }, 
  {
    path: 'product/:id',
    element:  <AxiosComponent/>

  },  
  {
    path: 'product',
    element:  <AxiosComponent/>

  },  
  {
    path: 'cart',
    element:  <UseReducerClass/>

  },  
  {
    path: 'cart/checkout',
    element:  <FuncComp/>

  },  
  
  
]);

export default function App() {
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


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