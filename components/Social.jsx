import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaMedium, FaHackerrank } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, name: "GitHub", path: "https://github.com/UpekshaHerath" },
  { icon: <FaLinkedinIn />, name: "LinkedIn", path: "https://www.linkedin.com/in/upeksha-herath-b82399215/" },
  { icon: <FaYoutube />, name: "YouTube", path: "https://www.youtube.com/channel/UCpGrjJuDRmQjnoVfRIp1ovw" },
  { icon: <FaTwitter />, name: "X (Twitter)", path: "https://x.com/Upeksha_Herath" },
  { icon: <FaMedium />, name: "Medium", path: "https://medium.com/@upekshadilshan000" },
  { icon: <FaHackerrank />, name: "HackerRank", path: "https://www.hackerrank.com/profile/upekshadilshan01" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            title={item.name}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
