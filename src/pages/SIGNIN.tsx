import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SIGNIN.css";

const SIGNIN: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBTSIGNINClick = useCallback(() => {
    navigate("/2-welcome");
  }, [navigate]);

  const onTXTNEWSIGNUPClick = useCallback(() => {
    navigate("/12-sign-up");
  }, [navigate]);

  return (
    <div className="sign-in3">
      <div className="sign-in-child" />
      <div className="sign-in-item" />
      <div className="sign-in-inner" />
      <div className="sign-in-child1" />
      <button className="btsignin1" onClick={onBTSIGNINClick} />
      <b className="sign-in4">Sign In</b>
      <input
        className="txt-sign-in"
        placeholder="E-mail or Mobile Number"
        type="text"
      />
      <input className="password1" placeholder="Password" type="text" />
      <button className="txtnewsignup" onClick={onTXTNEWSIGNUPClick}>
        <span className="didnt-joined-yet">
          <span className="didnt-joined-yet1">Didn’t Joined yet?</span>
          <span className="span4">{` `}</span>
          <span className="span5">{` `}</span>
        </span>
        <span className="sign-up4">Sign Up</span>
      </button>
      <div className="forgot-password">Forgot Password?</div>
      <div className="sign-in-child2" />
      <div className="sign-in-child3" />
      <div className="sign-in5">Sign In</div>
      <div className="sign-in-child4" />
      <img
        className="logo-turning-point-1-2"
        alt=""
        src="/logo-turning-point1-1@2x.png"
      />
    </div>
  );
};

export default SIGNIN;
