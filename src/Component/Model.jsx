import React, { useState } from "react";
import "./Model.css";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import Spinner from "react-bootstrap/Spinner";

function Model({ onHide }) {
  // State for mobile number OTP flow
  const [number, setNumber] = useState("");
  const [numbtn, setNumBtn] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpbox, setOtpBox] = useState(false);
  const [edit, setEdit] = useState("");

  // State for signup form
  const [userform, setUserForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hideon, setHideOn] = useState(false);
  const [confirmHideon, setConfirmHideOn] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  // State for login/signup toggle
  const [isLogin, setIsLogin] = useState(true);

  // Mock data for demo
  const otpdata = "123456";
  const MobileNum = "7505200576";
  const userobj = { name: "vivek", emaildata: "viveksaini78445@gmail.com", password: 12345678 };

  // Handle mobile number input
  const handleMobileChange = (value) => {
    let valuenum = value.replace(/[^0-9]/g, "");
    if (valuenum.length > 10) return;
    if (valuenum.length === 10) {
      setNumBtn(true);
    } else {
      setNumBtn(false);
    }
    if (valuenum.length === 1 && parseInt(valuenum[0]) <= 5) {
      return;
    }
    setEdit(valuenum);
    setNumber(valuenum);
  };

  // Send OTP
  const handleSendOtp = () => {
    toast.success("OTP sent to your mobile number");
    setOtpBox(true);
  };

  // Verify OTP
  const handleVerifyOtp = () => {
    if (otpdata !== otp) {
      toast.error("Invalid OTP");
      return;
    }
    if (MobileNum === number) {
      toast.success("OTP verified successfully");
      localStorage.setItem("userData", JSON.stringify(userobj));
      onHide();
      return;
    }
    setUserForm(true);
    toast.success("OTP verified successfully");
  };

  // Resend OTP
  const handleResendOtp = () => {
    toast.success("OTP resent successfully");
  };

  // Edit mobile number
  const handleEditNumber = () => {
    setOtpBox(false);
    setOtp("");
  };

  // Signup form submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Enter your name");
      return;
    }
    if (!email) {
      toast.error("Enter your email");
      return;
    }
    if (!password) {
      toast.error("Enter your password");
      return;
    }
    if (password.length < 7) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    if (!confirmPassword) {
      toast.error("Enter your confirm password");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    registerUser();
  };

  // Login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Enter your email");
      return;
    }
    if (!password) {
      toast.error("Enter your password");
      return;
    }
    handleLogin();
  };

  // API: Register User
  const registerUser = async () => {
    try {
      setShowLoading(true);
      const response = await fetch("https://api.restful-api.dev/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "06c1eb7d-dc82-4f83-a100-fa69c3cf593c"
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        setShowLoading(false);
        if (errorText.includes("User already exists")) {
          toast.error("User already exists");
        } else {
          toast.error("Internal server error");
        }
        return;
      }

      const data = await response.json();
      const userObj = data?.user;
      localStorage.setItem("userData", JSON.stringify(userObj));
      toast.success("Successfully registered");
      onHide();
    } catch (err) {
      setShowLoading(false);
      toast.error("Internal server error");
    } finally {
      setShowLoading(false);
    }
  };

  // API: Login
  const handleLogin = async () => {
    try {
      setShowLoading(true);
      const response = await fetch("https://api.restful-api.dev/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "06c1eb7d-dc82-4f83-a100-fa69c3cf593c"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      if (!response.ok) {
        const errorText = await response.text();
        setShowLoading(false);
        if (errorText.includes("Password is incorrect")) {
          toast.error("Password is incorrect");
        } else if(errorText.includes("A user with this email does not exist")){
              toast.error("user  not register");
        }
          else {
          toast.error("Internal server error");
        }
        return;
      }

      const data = await response.json();
      const userObj = data?.user;
      localStorage.setItem("userData", JSON.stringify(userObj));
      toast.success("Successfully logged in");
      onHide();
    } catch (error) {
      toast.error("Login failed");
    } finally {
      setShowLoading(false);
    }
  };

  // Switch to signup
  const handleSignupSwitch = () => {
    setIsLogin(false);
    setUserForm(true);
    setOtpBox(false);
  };

  // Switch to login
  const handleLoginSwitch = () => {
    setIsLogin(true);
    setUserForm(false);
    setOtpBox(false);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setNumber("");
    setOtp("");
  };

  return (
    <>
      <div className="custom-backdrop"></div>
      <div className="custom-modal">
        <div className="modal-inner">
          {/* LEFT SECTION */}
          <div className="modal-left">
            <div className="logo">
              Products with the <span>quality</span>
            </div>

            {!userform && !otpbox && (
              // LOGIN FORM
              <div className="auth-form">
                <h3>Welcome Back!</h3>
                <form onSubmit={handleLoginSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                  />
                  <div className="password-wrapper">
                    <input
                      type={hideon ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input"
                    />
                    <span className="eye-icon" onClick={() => setHideOn(!hideon)}>
                      {hideon ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  <button type="submit" className="continue-btn" disabled={showLoading}>
                    {showLoading ? <Spinner animation="border" size="sm" /> : "Login"}
                  </button>
                </form>
                <p className="switch-text">
                  Don't have an account?{" "}
                  <button onClick={handleSignupSwitch} className="switch-btn">
                    Sign Up
                  </button>
                </p>
                <small>
                  By continuing you agree to our <b>Terms & Conditions</b>
                </small>
              </div>
            )}

            {otpbox && (
              // OTP VERIFICATION
              <div className="otp-section">
                <div className="logo">Products with the quality</div>
                <h4>OTP Verification</h4>
                <p className="otp-desc">
                  Please enter the 6-digit code sent to your mobile number
                </p>
                <div className="mobile-edit">
                  +91 {edit}
                  <button onClick={handleEditNumber} className="edit-btn">
                    <TbEdit />
                  </button>
                </div>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span> </span>}
                  renderInput={(props) => <input {...props} />}
                  inputStyle={{
                    width: "45px",
                    height: "45px",
                    margin: "0 5px",
                    fontSize: "18px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    textAlign: "center"
                  }}
                />
                <p className="resend-text">
                  Didn't receive code?{" "}
                  <button onClick={handleResendOtp} className="resend-btn">
                    Resend
                  </button>
                </p>
                <button
                  className="continue-btn"
                  style={{ background: otp.length === 6 ? "#565454" : "#999" }}
                  disabled={otp.length !== 6}
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </button>
              </div>
            )}

            {userform && !otpbox && (
              // SIGNUP FORM
              <div className="auth-form">
                <h3>Create Account</h3>
                <form onSubmit={handleSignupSubmit}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                  />
                  <div className="password-wrapper">
                    <input
                      type={hideon ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input"
                    />
                    <span className="eye-icon" onClick={() => setHideOn(!hideon)}>
                      {hideon ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  <div className="password-wrapper">
                    <input
                      type={confirmHideon ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-input"
                    />
                    <span className="eye-icon" onClick={() => setConfirmHideOn(!confirmHideon)}>
                      {confirmHideon ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  <button type="submit" className="continue-btn" disabled={showLoading}>
                    {showLoading ? <Spinner animation="border" size="sm" /> : "Register"}
                  </button>
                </form>
                <p className="switch-text">
                  Already have an account?{" "}
                  <button onClick={handleLoginSwitch} className="switch-btn">
                    Login
                  </button>
                </p>
              </div>
            )}

            {/* Mobile Number OTP Option */}
            {/* {!userform && !otpbox && (
              <>
                <div className="divider">
                  <span>OR</span>
                </div>
                <div className="phone-input">
                  <span className="flag">+91</span>
                  <input
                    type="tel"
                    value={number}
                    placeholder="Enter Mobile Number"
                    onChange={(e) => handleMobileChange(e.target.value)}
                  />
                </div>
                <button
                  className="continue-btn"
                  style={{ background: numbtn ? "#565454" : "#999" }}
                  disabled={!numbtn}
                  onClick={handleSendOtp}
                >
                  Continue with OTP
                </button>
              </>
            )} */}
          </div>

          {/* RIGHT SECTION - Image */}
          <div className="modal-right">
            <img src="/loginImg.png" alt="login art" />
          </div>

          {/* CLOSE BUTTON */}
          <span className="close-btn" onClick={onHide}>✕</span>
        </div>
      </div>
    </>
  );
}

export default Model;