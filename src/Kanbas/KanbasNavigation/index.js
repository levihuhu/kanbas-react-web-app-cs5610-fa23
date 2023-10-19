import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsFillInboxFill } from "react-icons/bs";
import {AiOutlineHistory} from "react-icons/ai";
import{BiSolidHelpCircle} from "react-icons/bi";
import{FaCreativeCommonsSamplingPlus} from "react-icons/fa";


import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Help","Commons"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BsFillInboxFill className="wd-icon" />,
    History: <AiOutlineHistory className="wd-icon" />,
    Help: <BiSolidHelpCircle className="wd-icon" />,
    Commons: <FaCreativeCommonsSamplingPlus className="wd-icon" />,

  };

  const { pathname } = useLocation();
  return (
    <div  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img src="/images/neu.png"   style={{ width: 100  }}  />
    <div className="list-group wd-kanbas-navigation" style={{ width: 100 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
    </div>
    
  );
}
export default KanbasNavigation;

