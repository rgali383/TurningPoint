import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SIGNUP.css";

const SIGNUP: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBTSIGNUPClick = useCallback(() => {
    navigate("/2-welcome");
  }, [navigate]);

  const onTXTSIGNINTextClick = useCallback(() => {
    navigate("/11-sign-in");
  }, [navigate]);

  return (
    <div className="sign-up1">
      <div className="sign-up-child" />
      <div className="sign-up-item" />
      <div className="by-signing-up-container">
        <p className="by-signing-up-youre-agree-to">
          <span>{`By Signing up, You’re agree to our `}</span>
          <span className="terms-conditions">{`Terms & Conditions`}</span>
          <span className="span">{` `}</span>
        </p>
        <p className="and-privacy-policy">
          <span className="and">and</span>
          <span className="span">{` `}</span>
          <span>Privacy Policy</span>
        </p>
      </div>
      <b className="sign-up2">Sign Up</b>
      <input className="full-name" placeholder="Full Name" type="text" />
      <div className="sign-up-inner" />
      <div className="sign-up-child1" />
      <div className="btsignup1" onClick={onBTSIGNUPClick} />
      <input
        className="e-mail-or-mobile"
        placeholder="E-mail or Mobile Number"
        type="text"
      />
      <input className="password" placeholder="Password" type="text" />
      <div className="txtsignin" onClick={onTXTSIGNINTextClick}>
        <span>
          <span>Already Joined?</span>
          <span className="span2">{` `}</span>
          <span className="span">{` `}</span>
        </span>
        <span className="sign-in1">Sign In</span>
      </div>
      <div className="line-div" />
      <div className="sign-up-child2" />
      <div className="sign-up3">Sign Up</div>
      <div className="sign-up-child3" />
      <div className="sign-up-child4" />
      <img
        className="logo-turning-point-1-31"
        alt=""
        src="/logo-turning-point1-1@2x.png"
      />
    </div>
  );
};

export default SIGNUP;
