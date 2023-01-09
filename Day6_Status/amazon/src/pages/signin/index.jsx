import React from 'react'
import {useForm,useState} from 'react'

const SignInPage = () => {
  const [data, setData] = useState({
    firstName:"",
    password:"",
    })
    const {username,password} =data;
    const changeHandler=e=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler=e=>{
        e.preventDefault()
        console.log(data)
    }
  return (
      <div>
        <center>
          <form  onSubmit={submitHandler}>
              <input type="text" name='username' placeholder='username' value={username} onChange={changeHandler}/><br/>
              <input type="password" name='password' placeholder='password' value={password} onChange={changeHandler}/><br/>
              <input type="submit" placeholder='submit' />
          
          </form>
        </center>
      </div>
    )
  }
  
export default SignInPage




