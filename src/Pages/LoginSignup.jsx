import React, { useState } from 'react'
import './CSS/Loginsignup.css'
const LoginSignup = () => {
  const [state,setState]=useState("Login");
  const [formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  });

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const login= async()=>{
    console.log("Login fun",formData);
    let responseData;
    await fetch('https://shopping-backendd.onrender.com/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),

    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }

  }
  const signup= async()=>{
    console.log("signup",formData);
    let responseData;
    await fetch('https://shopping-backendd.onrender.com/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),

    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==='Sign Up'?<input name='username' value={formData.username}  onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler}type='password' placeholder='Password'/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}> Continue</button>
        {state==='Sign Up'?(<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>)
        :(<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>)
        }
        
        
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continuing i agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
// import React, { useState } from 'react';
// import './CSS/Loginsignup.css';

// const LoginSignup = () => {
//   const [state, setState] = useState("Login");
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: ""
//   });

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const login = async () => {
//     alert("Login function called");
//     alert(JSON.stringify(formData));
//     // Implement login functionality here
//   };

//   const signup = async () => {
//     alert("Signup function called");
//     alert(JSON.stringify(formData));
//     try {
//       const response = await fetch('http://localhost:4000/signup', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       alert('Response data: ' + JSON.stringify(data));

//       if (data.success) {
//         alert('Token received: ' + data.token);
//         localStorage.setItem('auth-token', data.token);
//         alert('Token stored in local storage');
//         window.location.replace("/");
//       } else {
//         alert("Signup failed: " + data.errors);
//       }
//     } catch (error) {
//       alert("Error during signup: " + error);
//     }
//   };

//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fields">
//           {state === 'Sign Up' && (
//             <input
//               name='username'
//               value={formData.username}
//               onChange={changeHandler}
//               type="text"
//               placeholder='Your Name'
//             />
//           )}
//           <input
//             name='email'
//             value={formData.email}
//             onChange={changeHandler}
//             type="email"
//             placeholder='Email Address'
//           />
//           <input
//             name='password'
//             value={formData.password}
//             onChange={changeHandler}
//             type='password'
//             placeholder='Password'
//           />
//         </div>
//         <button onClick={() => state === "Login" ? login() : signup()}>
//           Continue
//         </button>
//         {state === 'Sign Up' ? (
//           <p className="loginsignup-login">
//             Already have an account? <span onClick={() => setState("Login")}>Login Here</span>
//           </p>
//         ) : (
//           <p className="loginsignup-login">
//             Create an account? <span onClick={() => setState("Sign Up")}>Click Here</span>
//           </p>
//         )}
//         <div className="loginsignup-agree">
//           <input type='checkbox' name='' id='' />
//           <p>By continuing, I agree to the terms of use & privacy policy</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;
