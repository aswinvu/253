import React, { useState } from 'react'
import './Login.css'
const Login = () => {
    const[un,setUn]=useState('');
    const[pwd,setPwd]=useState(''); 
    const[error,setError]=useState(false);
    const navigate=useNavigate();


    const readusername =(event)=>{
        event.preventDefault();
        setUn(event.target.value)
    }
    const readpassword =(event)=>{
        event.preventDefault();
        setPwd(event.target.value);
    }
    const readalldata=(event)=>{
    event.preventDefault();
    if(un.trim()==='' || pwd.trim ()==''){
    setError(true);
return;
}
else{
    setError(false);
    navigate('/Home')
}
}

  return (
    <div className='aa'>
      <h1 className='bb'> Sign in</h1>
      <form> User name<input type="text" onChange={readusername} /><br/><br/>
        password<input type="password" onChange={readpassword}/><br/><br/>
        <button type='submit'onClick={readalldata}>Login</button>
        {error &&'Error occured'}
        </form>
        
     
    </div>
  )
}

export default Login
