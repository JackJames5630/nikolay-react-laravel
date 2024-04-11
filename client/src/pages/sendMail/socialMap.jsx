
import SocialCardStyles from "./socialCardStyle";

import { FaPaperPlane } from "react-icons/fa";
import { SiHabr } from "react-icons/si";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { TbBrandX } from "react-icons/tb";
import { vcRu } from "../../assets";


const SocialMap = [
    {
        icons: <FaPaperPlane className="w-[50%]" />,
    },
    {
        icons: <img src={vcRu} className="w-[50%]" />
    },
    {
        icons: <SiHabr className="w-[50%]" />,
    },
    {
        icons: <FaFacebookF className="w-[50%]" />,
    },
    {
        icons: <LiaLinkedinIn className="w-[50%]" />,
    },
    {
        icons: <TbBrandX className="w-[50%]" />,
    },
    {
        icons: <IoLogoYoutube className="w-[50%]" />,
    },
]

export default SocialMap;