import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DRUGRESOURCES.css";

const DRUGRESOURCES: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBTHOMEIconClick = useCallback(() => {
    navigate("/2-welcome");
  }, [navigate]);

  const onBTCOMPGIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBTPROFPGIconClick = useCallback(() => {
    navigate("/51-profile");
  }, [navigate]);

  return (
    <div className="drug-resources">
      <div className="drug-resources-child" />
      <div className="drug-resources-item" />
      <button className="in-alberta-visit-container">
        <span className="in-alberta-visit-container1">
          <p className="blank-line">&nbsp;</p>
          <p className="blank-line">&nbsp;</p>
          <ul className="in-alberta-visit-wwwalbertaq">
            <li className="provides-coaching-to-quit-smok">
              {`In Alberta, visit `}
              <a
                className="wwwalbertaquitsca"
                href="https://www.albertaquits.ca"
                target="_blank"
              >
                <span className="lethbridge-shelter-and">
                  www.albertaquits.ca
                </span>
              </a>{" "}
              or call 1-866-710-7848
            </li>
            <li className="provides-coaching-to-quit-smok">
              Canada-Wide: 1-866-366-3667
            </li>
            <li className="provides-coaching-to-quit-smok">
              Provides coaching to quit smoking
            </li>
            <li className="provides-coaching-to-quit-smok">
              {`Common symptoms of nicotine withdrawal, `}
              <a
                className="wwwalbertaquitsca"
                href="https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/7-common-withdrawal-symptoms/index.html"
                target="_blank"
              >
                <span className="lethbridge-shelter-and">click here</span>
              </a>
              .
            </li>
            <li className="provides-coaching-to-quit-smok">
              Short-term effects 
            </li>
            <li>Long-term effects</li>
          </ul>
        </span>
      </button>
      <div className="video-for-addressing-container">
        <span className="in-alberta-visit-container1">
          <p className="blank-line">
            <b className="blank-line3">&nbsp;</b>
          </p>
          <p className="blank-line">
            <b className="blank-line3">&nbsp;</b>
          </p>
          <ul className="video-for-addressing-naloxone">
            <li className="provides-coaching-to-quit-smok">
              <span>Video for addressing Naloxone,</span>
              <a
                className="wwwalbertaquitsca"
                href="https://www.ama-assn.org/delivering-care/overdose-epidemic/how-administer-naloxone"
                target="_blank"
              >
                <span>
                  <span className="lethbridge-shelter-and"> click here</span>
                </span>
              </a>
              <span>.</span>
            </li>
            <li className="provides-coaching-to-quit-smok">
              <span>{`Short-term effects, `}</span>
              <a
                className="wwwalbertaquitsca"
                href="https://www.canada.ca/en/health-canada/services/opioids.html"
                target="_blank"
              >
                <span>
                  <span className="lethbridge-shelter-and">click here.</span>
                </span>
              </a>
            </li>
            <li className="provides-coaching-to-quit-smok">
              <span>Long-term effects</span>
            </li>
            <li className="provides-coaching-to-quit-smok">
              <span>Types of opioids </span>
            </li>
            <li>
              <span>Opioid stories in Calgary </span>
            </li>
          </ul>
        </span>
      </div>
      <b className="resources-for-opioids">RESOURCES FOR OPIOIDS</b>
      <div className="drug-resources-inner" />
      <b className="george-spady-centre-container">
        <span className="in-alberta-visit-container1">
          <p className="blank-line">&nbsp;</p>
          <p className="blank-line">&nbsp;</p>
          <ul className="video-for-addressing-naloxone">
            <li className="provides-coaching-to-quit-smok">
              <a
                className="wwwalbertaquitsca"
                href={`https://www.albertahealthservices.ca/findhealth/Service.aspx?id=1077161&serviceAtFacilityID=1120204#contentStart`}
                target="_blank"
              >
                <span className="lethbridge-shelter-and">
                  George Spady Centre
                </span>
              </a>
            </li>
            <li className="provides-coaching-to-quit-smok">
              <a
                className="wwwalbertaquitsca"
                href={`https://www.albertahealthservices.ca/findhealth/Service.aspx?id=1077161&serviceAtFacilityID=1134084#contentStart`}
                target="_blank"
              >
                <span className="lethbridge-shelter-and">
                  Lethbridge Shelter and Resource Centre
                </span>
              </a>
            </li>
            <li className="provides-coaching-to-quit-smok">
              <a
                className="wwwalbertaquitsca"
                href={`https://www.albertahealthservices.ca/findhealth/Service.aspx?id=1077161&serviceAtFacilityID=1120202#contentStart`}
                target="_blank"
              >
                <span className="lethbridge-shelter-and">
                  Radius Community Health and Healing
                </span>
              </a>
            </li>
            <li className="provides-coaching-to-quit-smok">
              <a
                className="wwwalbertaquitsca"
                href={`https://www.albertahealthservices.ca/findhealth/Service.aspx?id=1077161&serviceAtFacilityID=1134042#contentStart`}
                target="_blank"
              >
                <span className="lethbridge-shelter-and">
                  Red Deer 5246 53 Avenue
                </span>
              </a>
            </li>
            <li className="provides-coaching-to-quit-smok">
              <a
                className="wwwalbertaquitsca"
                href={`https://www.albertahealthservices.ca/findhealth/Service.aspx?id=1077161&serviceAtFacilityID=1134083#contentStart`}
                target="_blank"
              >
                <span className="lethbridge-shelter-and">
                  Royal Alexandra Hospital
                </span>
              </a>
            </li>
            <li>
              <a
                className="wwwalbertaquitsca"
                href={`https://www.albertahealthservices.ca/findhealth/Service.aspx?id=1077161&serviceAtFacilityID=1134085#contentStart`}
                target="_blank"
              >
                <span className="lethbridge-shelter-and">Wapiti House</span>
              </a>
            </li>
          </ul>
        </span>
      </b>
      <b className="safe-injection-sites">{`SAFE INJECTION SITES `}</b>
      <b className="resources-for-nicotine">RESOURCES FOR NICOTINE</b>
      <div className="drug-resources-child1" />
      <img
        className="bthome-icon2"
        alt=""
        src="/vector.svg"
        onClick={onBTHOMEIconClick}
      />
      <img
        className="btcompg-icon1"
        alt=""
        src="/52btcompg.svg"
        onClick={onBTCOMPGIconClick}
      />
      <img className="vector-icon11" alt="" src="/vector8.svg" />
      <img
        className="btprofpg-icon1"
        alt=""
        src="/vector3.svg"
        onClick={onBTPROFPGIconClick}
      />
      <img
        className="gold-trophy-in-air1"
        alt=""
        src="/gold-trophy-in-air1@2x.png"
      />
      <b className="drug-resources1">{`Drug Resources `}</b>
      <img
        className="logo-turning-point-1-4"
        alt=""
        src="/logo-turning-point1-5@2x.png"
      />
    </div>
  );
};

export default DRUGRESOURCES;
