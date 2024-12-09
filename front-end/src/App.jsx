// import { useState } from 'react'

// import  ConstructionWebsite from'./components/first'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Login from './components/login'
// import Home from './components/home'
// // import Home from'./comonets/home'


// function App() {


//   return (
//     <>
//       {/* <BrowserRouter>
//       <Routes>
//     <Route path='/' element={<ConstructionWebsite/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='./first' element={<Home/>}/>
//       </Routes>
//       </BrowserRouter> */}
//       <Home/>


    
//     </>
//   )
// }

// export default App


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
// import Details from './components/itemsDetails';
// import Home from './components/home';

// const App = () => {
//   return (
//     <Router>
//       <Routes> {/* Use Routes instead of Switch */}
//         <Route path="/" element={<Home />} /> {/* Use element prop for components */}
//         <Route path="/details/:itemName" element={<Details />} /> 
//         {/* Use element prop for components */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
// App.js or any specific component file
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import First from './components/first';
import Login from './components/Login'; // Login page
import Home from './components/Home'; // Home page
import Details from './components/itemsDetails'; // Details page

const App = () => {
  return (
    <Auth0Provider
    domain="dev-2lrqwtvhrumwyyvq.us.auth0.com"
    clientId="ekS38jz7HRNWjvXDmtrsid7rYDunzRsI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >

    <Router>
      <Routes>
        <Route path="/" element={<First />} /> {/* Initial Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/home" element={<Home />} /> {/* Home Page */}
        <Route path="/details/:itemName" element={<Details />} /> 
      </Routes>
    </Router>
    // </Auth0Provider>
  );
};

export default App;




