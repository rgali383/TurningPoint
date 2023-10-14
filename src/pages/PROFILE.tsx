import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PROFILE.css";

const PROFILE: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBTHOMEIconClick = useCallback(() => {
    navigate("/2-welcome");
  }, [navigate]);

  const onBTCOMPGIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBTDRUGPGIconClick = useCallback(() => {
    navigate("/3-drug-resources");
  }, [navigate]);

  const onBTCONTClick = useCallback(() => {
    navigate("/52-journal");
  }, [navigate]);

  return (
    <div className="profile">
      <div className="profile-child" />
      <img className="target-and-dart1" alt="" src="/target-and-dart1@2x.png" />
      <div className="profile-item" />
      <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      <div className="sign-in2">{`Sign in: `}</div>
      <div className="profile-inner" />
      <b className="your-streak">{`Your Streak: `}</b>
      <b className="your-journal1">{`Your Journal `}</b>
      <b className="hey-emily">Hey Emily,</b>
      <img className="vector-icon12" alt="" src="/vector9.svg" />
      <img className="vector-icon13" alt="" src="/vector10.svg" />
      <img className="vector-icon14" alt="" src="/vector4.svg" />
      <div className="profile-child1" />
      <div className="profile-child2" />
      <div className="profile-child3" />
      <div className="profile-child4" />
      <div className="profile-child5" />
      <div className="profile-child6" />
      <img className="clendar-1-icon" alt="" src="/clendar-1@2x.png" />
      <div className="profile-child7" />
      <div className="profile-child8" />
      <div className="profile-child9" />
      <div className="profile-child10" />
      <div className="profile-child11" />
      <div className="profile-child12" />
      <div className="profile-child13" />
      <div className="profile-child14" />
      <div className="profile-child15" />
      <div className="profile-child16" />
      <div className="profile-child17" />
      <div className="profile-child18" />
      <div className="profile-child19" />
      <img className="vector-icon15" alt="" src="/52btcompg.svg" />
      <img className="vector-icon16" alt="" src="/vector2.svg" />
      <img className="vector-icon17" alt="" src="/vector5.svg" />
      <div className="profile-child20" />
      <img
        className="bthome-icon4"
        alt=""
        src="/vector.svg"
        onClick={onBTHOMEIconClick}
      />
      <img
        className="btcompg-icon3"
        alt=""
        src="/52btcompg.svg"
        onClick={onBTCOMPGIconClick}
      />
      <img
        className="btdrugpg-icon3"
        alt=""
        src="/vector2.svg"
        onClick={onBTDRUGPGIconClick}
      />
      <img className="vector-icon18" alt="" src="/vector5.svg" />
      <div className="btcont" onClick={onBTCONTClick} />
      <b className="continue">Continue</b>
      <img
        className="logo-turning-point-1-61"
        alt=""
        src="/logo-turning-point1-5@2x.png"
      />
    </div>
  );
};

export default PROFILE;
