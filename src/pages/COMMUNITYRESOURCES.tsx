import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./COMMUNITYRESOURCES.css";

const COMMUNITYRESOURCES: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/2-welcome");
  }, [navigate]);

  const onBTHOMEIconClick = useCallback(() => {
    navigate("/2-welcome");
  }, [navigate]);

  const onBTDRUGPGIconClick = useCallback(() => {
    navigate("/3-drug-resources");
  }, [navigate]);

  const onBTPROFPGIconClick = useCallback(() => {
    navigate("/51-profile");
  }, [navigate]);

  return (
    <div className="community-resources">
      <div className="community-resources-child" />
      <div className="community-resources-item" />
      <div className="community-resources-inner" />
      <div className="community-resources-child1" />
      <b className="community-events">Community Events</b>
      <div className="community-resources-child2" />
      <img
        className="vector-icon"
        alt=""
        src="/vector.svg"
        onClick={onVectorIconClick}
      />
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <img className="vector-icon2" alt="" src="/vector2.svg" />
      <img className="vector-icon3" alt="" src="/vector3.svg" />
      <b className="recovery-walkrun">Recovery Walk/Run</b>
      <div className="october-13-2023">October 13, 2023 @ 12am</div>
      <div className="calgary-ab">Calgary, AB</div>
      <div className="community-resources-child3" />
      <div className="community-resources-child4" />
      <b className="community-garden">Community Garden</b>
      <div className="october-20-2023">October 20, 2023 @ 10am</div>
      <div className="calgary-ab1">Calgary, AB</div>
      <div className="community-resources-child5" />
      <div className="community-resources-child6" />
      <b className="weekly-art-therapy">Weekly Art Therapy</b>
      <div className="october-17-2023">October 17, 2023 @ 1pm</div>
      <div className="chestermere-ab">Chestermere, AB</div>
      <div className="call-1-866-332-2322-toll-free-container">
        <ul className="call-1-866-332-2322-toll-free">
          <li className="program-and-services-calgary">
            Call 1-866-332-2322 (toll-free within Alberta) for addiction and
            mental health support.
          </li>
          <li className="program-and-services-calgary">
            Mental Health hotline: 1-877-303-2642
          </li>
          <li className="program-and-services-calgary">Health Link: 811</li>
          <li className="program-and-services-calgary">
            Program and Services (Calgary Area Only)
          </li>
          <li>
            {`How to talk about drugs, `}
            <a
              className="click-here"
              href="https://www.canada.ca/en/health-canada/services/substance-use/talking-about-drugs.html"
              target="_blank"
            >
              <span className="click-here1">click here.</span>
            </a>
             
          </li>
        </ul>
      </div>
      <b className="community-resources1">{`Community Resources `}</b>
      <img
        className="woman-meditates-under-a-rainbo"
        alt=""
        src="/woman-meditates-under-a-rainbow@2x.png"
      />
      <div className="community-resources-child7" />
      <img
        className="bthome-icon"
        alt=""
        src="/vector.svg"
        onClick={onBTHOMEIconClick}
      />
      <img className="vector-icon4" alt="" src="/vector1.svg" />
      <img
        className="btdrugpg-icon"
        alt=""
        src="/vector2.svg"
        onClick={onBTDRUGPGIconClick}
      />
      <img
        className="btprofpg-icon"
        alt=""
        src="/vector3.svg"
        onClick={onBTPROFPGIconClick}
      />
      <img
        className="logo-turning-point-1-5"
        alt=""
        src="/logo-turning-point1-5@2x.png"
      />
    </div>
  );
};

export default COMMUNITYRESOURCES;
