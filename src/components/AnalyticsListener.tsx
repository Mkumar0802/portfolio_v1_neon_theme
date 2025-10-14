import { useEffect} from "react";
import {useLocation} from "react-router-dom";
import { sendVisit } from "../lib/analytics";

export const AnalyticsListener: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Send visit data on route change
    sendVisit(location.pathname);
  }, [location]);

  return null; // This component does not render anything
};

export default AnalyticsListener;