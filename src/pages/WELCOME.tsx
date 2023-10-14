import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WELCOME.css";

const WELCOME: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/51-profile");
  }, [navigate]);

  const onBTCOMPGIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBTDRUGPGIconClick = useCallback(() => {
    navigate("/3-drug-resources");
  }, [navigate]);

  const onBTPROFPGIconClick = useCallback(() => {
    navigate("/51-profile");
  }, [navigate]);

  return (
    <div className="welcome">
      <div className="welcome-child" />
      <img className="welcome-item" alt="" src="/rectangle-6.svg" />
      <div className="welcome-inner" />
      <button className="rectangle-button" onClick={onRectangleButtonClick} />
      <div className="welcome-child1" />
      <div className="welcome-child2" />
      <b className="try-todays-prompt-container">
        <p className="try-todays-prompt">Try Today’s Prompt in your journal!</p>
      </b>
      <b className="the-man-who-container">
        <span className="the-man-who-container1">
          <p className="try-todays-prompt">
            “The man who moves a mountain begins by carrying away small stones.”
          </p>
          <p className="try-todays-prompt">– Confucius</p>
        </span>
      </b>
      <b className="welcome-emily">Welcome, Emily!</b>
      <img className="target-and-dart" alt="" src="/target-and-dart@2x.png" />
      <b className="streak-100">
        <p className="try-todays-prompt">{`Streak: `}</p>
        <p className="try-todays-prompt">100</p>
      </b>
      <div className="welcome-child3" />
      <img className="bthome-icon3" alt="" src="/20bthome.svg" />
      <img
        className="btcompg-icon2"
        alt=""
        src="/52btcompg.svg"
        onClick={onBTCOMPGIconClick}
      />
      <img
        className="btdrugpg-icon2"
        alt=""
        src="/vector2.svg"
        onClick={onBTDRUGPGIconClick}
      />
      <img
        className="btprofpg-icon2"
        alt=""
        src="/vector3.svg"
        onClick={onBTPROFPGIconClick}
      />
      <img
        className="logo-turning-point-1-3"
        alt=""
        src="/logo-turning-point1-3@2x.png"
      />
    </div>
  );
};

export default WELCOME;
