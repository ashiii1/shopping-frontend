// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'; // your main component
// import ShopContextProvider from './Context/ShopContext';

// ReactDOM.render(
//   <React.StrictMode>
//     <ShopContextProvider>
//       <App />
//     </ShopContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <reportWebVitals>
    <ShopContextProvider>
    <App />
  </ShopContextProvider>
  // </reportWebVitals>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
