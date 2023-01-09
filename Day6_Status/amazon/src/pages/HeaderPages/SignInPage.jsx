import React from "react";
import { useForm } from "react-hook-form";
import "./Sign.css";
import { Link } from "react-router-dom";
import {MdPlayArrow} from 'react-icons/md'

let renderCount = 0;

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      usernameOrEmail: "",
    },
  });
  renderCount++;
  console.log("errors", errors);
  register("usernameOrEmail", { required: true });

  return (
    <body>
      <div className="Maindiv">
        {/* signinbox */}
        <div className="signbox">
          <form>
            <div className="signintext">Sign in</div>
            <label className="labelname">Email or mobile phone number</label>
            <br />
            <div className="textbox">
              <input
                className="inputbox"
                {...register("usernameOrEmail", { required: true })}
              />
              <br />
            </div>
            <div>
              <input
                type="submit"
                className="ContinueButton"
                name="submit"
                value="Continue"
              />
            </div>
            <div className="leagal-text-row">
              By continuing, you agree to Amazon's
              <Link to="/" className="linkConditions">
                Condtions of Use
              </Link>
              and
              <Link to="/" className="linkPrivacy">
                Privacy Notice
              </Link>
            </div>
            <div>
            <MdPlayArrow className="sidearrow"/>
             {/* <div className="help"> */}
             <Link to="/" className="needhelplink" >
             Need Help?
              </Link>
            {/* </div> */}
            </div>
            <div>
              <Link to='/'>
               <input type="submit" className="Create-amazon" name="Create Amazon Account" value="Create your Amazon Account"></input>
               </Link>
            </div>
            <footer>
              <div  className="footerarea">
                
              {/* <Link to='/' className="conditionslink">
                Condtions of Use
              </Link> */}
              </div>
            </footer>
          </form>
        </div>
      </div>
    </body>
  );
};

export default SignInPage;
