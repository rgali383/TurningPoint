import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import COMMUNITYRESOURCES from "./pages/COMMUNITYRESOURCES";
import JOURNAL from "./pages/JOURNAL";
import DRUGRESOURCES from "./pages/DRUGRESOURCES";
import WELCOME from "./pages/WELCOME";
import SIGNUP from "./pages/SIGNUP";
import PROFILE from "./pages/PROFILE";
import SIGNIN from "./pages/SIGNIN";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/52-journal":
        title = "";
        metaDescription = "";
        break;
      case "/3-drug-resources":
        title = "";
        metaDescription = "";
        break;
      case "/2-welcome":
        title = "";
        metaDescription = "";
        break;
      case "/12-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/51-profile":
        title = "";
        metaDescription = "";
        break;
      case "/11-sign-in":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<COMMUNITYRESOURCES />} />
      <Route path="/52-journal" element={<JOURNAL />} />
      <Route path="/3-drug-resources" element={<DRUGRESOURCES />} />
      <Route path="/2-welcome" element={<WELCOME />} />
      <Route path="/12-sign-up" element={<SIGNUP />} />
      <Route path="/51-profile" element={<PROFILE />} />
      <Route path="/11-sign-in" element={<SIGNIN />} />
    </Routes>
  );
}
export default App;
