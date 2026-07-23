import {
  FaLinkedin,
  FaBuilding,
} from "react-icons/fa";

import { SiIndeed } from "react-icons/si";

function PlatformLogo({ platform }) {

  switch (platform) {

    case "LINKEDIN":
      return <FaLinkedin color="#0A66C2" />;

    case "INDEED":
      return <SiIndeed color="#2557A7" />;

    case "NAUKRI":
      return <span>N</span>;

    case "GLASSDOOR":
      return <span>G</span>;

    case "WELLFOUND":
      return <span>W</span>;

    case "MONSTER":
      return <span>M</span>;

    default:
      return <FaBuilding />;
  }
}

export default PlatformLogo;