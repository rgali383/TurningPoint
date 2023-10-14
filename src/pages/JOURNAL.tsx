import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./JOURNAL.css";

const JOURNAL: FunctionComponent = () => {
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

  return (
    <div className="journal">
      <div className="journal-child" />
      <div className="journal-item" />
      <div className="journal-inner" />
      <div className="journal-child1" />
      <b className="b">10\11\2023</b>
      <div className="journal-child2" />
      <div className="journal-child3" />
      <b className="b1">08\12\2023</b>
      <div className="journal-child4" />
      <div className="journal-child5" />
      <b className="b2">01\2\2023</b>
      <div className="journal-child6" />
      <div className="what-would-it">
        What would it take to be proud of myself?
      </div>
      <b className="daily-prompt">{`Daily Prompt: `}</b>
      <b className="your-journals">{`Your Journals: `}</b>
      <b className="new-entry">{`New Entry: `}</b>
      <div className="woman-meditates-under-a-rainbo1" />
      <b className="your-journal">Your Journal!</b>
      <img className="vector-icon5" alt="" src="/vector4.svg" />
      <div className="journal-child7" />
      <img
        className="bthome-icon1"
        alt=""
        src="/vector.svg"
        onClick={onBTHOMEIconClick}
      />
      <img
        className="btcompg-icon"
        alt=""
        src="/52btcompg.svg"
        onClick={onBTCOMPGIconClick}
      />
      <img
        className="btdrugpg-icon1"
        alt=""
        src="/vector2.svg"
        onClick={onBTDRUGPGIconClick}
      />
      <img className="vector-icon6" alt="" src="/vector5.svg" />
      <img className="vector-icon7" alt="" src="/vector6.svg" />
      <img className="vector-icon8" alt="" src="/vector6.svg" />
      <img className="vector-icon9" alt="" src="/vector6.svg" />
      <img className="vector-icon10" alt="" src="/vector7.svg" />
      <img
        className="gold-trophy-in-air"
        alt=""
        src="/gold-trophy-in-air@2x.png"
      />
      <img
        className="logo-turning-point-1-6"
        alt=""
        src="/logo-turning-point1-5@2x.png"
      />
    </div>
  );
};

export default JOURNAL;
