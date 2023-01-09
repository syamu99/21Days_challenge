import React,{useState} from 'react'
import{useForm} from 'react-hook-form'
import './CreateAmazonAcc.css';


const CreateAmazonAccount = () => {
    const [data, setData] = useState({
        yourname: "",
        mobileNumberOremail: "",
        password:"",
        reenterPassword: ""

    });
    
    const { register, onChange,handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
          yourname: "",
          mobileNumberOremail: "",
          password:"",
          reenterPassword: ""

        },
      });
    const {yourname,mobileNumberOremail,password ,reenterPassword} =data;
    const changeHandler=e=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler=data=>{
        data.preventDefault()
        console.log(data)
    }
  return (
    <div>
        <div className='Main'>
            <div>
             <img className="Amazlogo" src="/amaz.png" alt="amazon link" />
            </div>
            <form onSubmit={handleSubmit(submitHandler)}>
            <div className="Create-Account">
            <div className="Crateaccount">Create account</div>
           
            <div className="textbox">
               <div className='input1'>
              <label className="labelname">Your name</label><br />
              <input type="text" className="inputbox" name="yourname" value={yourname} onChange={changeHandler} placeholder="First and last name" {...register("Your name", { required: true })} /><br/>
              </div> 

              <div className='input1'>
              <label type="email" className="labelname">Mobile number or email</label><br/>
              <input name="emailOrPhonenumber" value={mobileNumberOremail} className="inputbox" onChange={changeHandler} {...register("Mobile number Or email", {required: true})}/><br/>
              </div>

              <div className='input1'>
              <label className="labelname">Password</label><br/>
              <input type="password" name="password" className="inputbox" value={password} placeholder="at least 6 characters" {...register("Password", {required: true})}/><br/>
              </div>

              <div className='input1'>
              <label className="labelname">Re-enter Password</label><br/>
              <input  type="password" name="reenterPassword" className="inputbox" value={reenterPassword} {...register("Re-enter Password", {required: true})}/><br/>              
            </div>  
             <p>By enrolling your mobile phone number, you consent to receiving automated security notifications via text message from Amazon. You can opt out by removing your mobile number on the Login & Security page located in Your Account settings. Message and data rates may apply.</p>
            <div>
                <input type="submit" className='Continue' name="Continue" value="Continue"/>

            </div>
            </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default CreateAmazonAccount
