import React, { useState,useEffect } from "react";
import "./Model.css";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";

function Model({ onHide }) {
  const [number, setnumber] = useState("")
  const [numbtn, setnumbtn] = useState(false)
  const [otp, setOtp] = useState("");
  const [otpbox, setotpbox] = useState(false)
  const [userform, setuserform] = useState(false)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [hideon, sethideon] = useState(false)
  const [Confirmhideon,setConfirmhideon]=useState(false);
  const [edit, setedit] = useState('');


  const otpdata = "123456"
  const MobileNum = "7505200576"
  const userobj = { name: "vivek", emaildata: "viveksaini78445@gmail.com", password: 12345678 }



  // console.log("otpdata", otp)
  const handlechange = (value) => {
    let valuenum = value.replace(/[^0-9]/g, "");
    // console.log("vivekhillo=", valuenum)
    if (valuenum.length > 10) return;
    if (valuenum.length == 10) {
      setnumbtn(true)
    } else {
      setnumbtn(false)
    }

    if (valuenum.length === 1 && parseInt(valuenum[0]) <= 5) {
      return;
    }

    setedit(valuenum);
    setnumber(valuenum);
  };

  const handleSumbit = () => {
    toast.success("send OTP on your Mobile number")
    setotpbox(true)
  }

  const handleverify = () => {
    if (otpdata != otp) {
      toast.error("otp invaild")
      return;
    }
    if (MobileNum == number) {
      toast.success("otp successfully submit")
      localStorage.setItem("userData", JSON.stringify(userobj));
      onHide();
      return;
    }
    setuserform(true)
    
    toast.success("otp successfully submit")
  }


  const handleSumbitdata = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("enter your name")

    } else if (!email) {
      toast.error("enter your email")
    } else if (!password) {
      toast.error("enter you password")
    } else if (password.length < 7) {
      toast.error("password must greater than 8 digit")
    }

    else if (!confirmPassword) {
      toast.error("enter your confirmpassoword")
    } else if (password != confirmPassword) {
      toast.error("password not match")
    }
    else {
      let userobj = {
        name: name,
        emaildata: email,
        password: password,
         number: number
      }

      localStorage.setItem("userData", JSON.stringify(userobj));
      toast.success("successfully ragistesion")
      onHide();
    }

  }
  const handleEditnum = () => {
    setotpbox(false);
  }
  const ResendOtp = () => {
    toast.success("successfully resend otp ")
  }

 


  return (
    <>
      {/* Backdrop */}
      <div className="custom-backdrop" ></div>

      {/* Modal Box */}
      <div className="custom-modal">
        <div className="modal-inner">
 
          {/* LEFT */}
          {!userform && (
            !otpbox ?
              <div className="modal-left">
                <div className="logo">
                  Next <span>Toppers</span>
                </div>

                <h3>Welcome !</h3>
                <p>Enter your mobile number</p>

                <div className="phone-input">
                  <span className="flag">+91</span>
                  {/* <input type="number" */}
                  <input type="tel"
                    value={number}
                    placeholder="Enter Mobile Number"
                    onChange={(e) => handlechange(e.target.value)}
                  />
                </div>

                <button className="continue-btn"
                  style={{ background: numbtn ? "#565454" : "#999" }}
                  disabled={!numbtn ? true : false}
                  onClick={handleSumbit}

                >Continue</button>

                <small>
                  By continuing you agree to our <b>Term & Conditions</b>
                </small>
              </div>
              :
              <div style={{ padding: "15px", margin: "20px 10px" }}>
                {/* <div className="logo">
              Next <span>Toppers</span>
            </div> */}
                <span className="logo">Next Toppers</span>
                <span>OTP Verification </span><br />
                <span style={{ color: "gray", fontSize: "12px" }}>Please enter the 6-digit code we sent to your mobile number</span>
                <br /><br />
                <div style={{ color: "gray", fontSize: "14px" }}> +91{edit}
                  <sub>
                    <button onClick={handleEditnum} style={{ border: "none", background: "none" }}>
                      <sub><TbEdit style={{ cursor: "pointer", fontSize: "19px" }} /></sub>

                    </button>
                  </sub>
                </div>
                <br /><br />

                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span> </span>}
                  renderInput={(props) => <input {...props} />}
                  inputStyle={{
                    width: "40px",
                    height: "40px",
                    margin: "0 5px",
                    fontSize: "18px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    textAlign: "center"
                  }}
                />

                <p style={{ color: "gray", fontSize: "12px" }}>Didn't receive code?
                  <button onClick={ResendOtp} style={{
                    color: "gray", fontSize: "12px",
                    border: "none", cursor: "pointer", background: "none"
                  }}>
                    <h4>Resend</h4></button> </p>
                <br /><br />
                <button className="continue-btn"

                  style={{ background: otp.length == 6 ? "#565454" : "#999" }}
                  disabled={otp.length == 6 ? false : true}
                  onClick={handleverify}
                >
                  Verify OTP
                </button>
              </div>

          )}


          {userform && (
            <div className="form-container">
              <form name="frm" className="custom-form" onSubmit={handleSumbitdata}  >
                <h3>Create Account</h3>

                <input type="text"
                  className="classInput"
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => setname(e.target.value)}


                />
                <input type="email"
                  value={email}
                  className="classInput"
                  placeholder="Enter your email"
                  onChange={(e) => setemail(e.target.value)}
                />
                <div className="passclass" style={{ display: "flex",
                   border: "1px solid grey", borderRadius: "9px" }}>
                  <input type={hideon ? "text" : "password"}
                    value={password}
                    placeholder="Enter your password"
                    className="passinput"

                    onChange={(e) => setpassword(e.target.value)}

                  />
                  <span
                    className="icaneye"
                    onClick={(e) => {
                      e.preventDefault();
                      sethideon(!hideon);
                    }}
                  >
                    {hideon ? <FaEye /> : <FaEyeSlash />}
                  </span>



                </div>
                <div className="passclass" style={{ display: "flex", border: "1px solid grey", borderRadius: "8px" }}>
                  <input type={Confirmhideon?"text":"password"}
                    value={confirmPassword}
                    placeholder="conFirm your password"
                    className="passinput"

                    onChange={(e) => setConfirmPassword(e.target.value)}

                  />
                  <span className="icaneye"
                   onClick={(e) => {
                      e.preventDefault();
                      setConfirmhideon(!Confirmhideon);
                    }}
                  >
                     {Confirmhideon ? <FaEye /> : <FaEyeSlash />}
                    </span>
                </div>
                <button type="submit">Register</button>
              </form>
            </div>

          )}

          {/* RIGHT */}
          <div className="modal-right">
            <img
              src="/loginImg.png"
              alt="login art"
            />
          </div>

          {/* CLOSE */}
          <span className="close-btn" onClick={onHide}>✕</span>

        </div>
      </div>
    </>
  );
}

export default Model;
