import { FaXTwitter } from "react-icons/fa6";
import style from "./side_bar.module.css";
import { IoIosMore, IoIosSearch } from "react-icons/io";
import {
  IoNotificationsOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { CiCircleMore } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";

interface SideBarProps {
  className?: string;
}

const SideBar: React.FC<SideBarProps> = ({ className }) => {
  return (
    <div className={className}>
      {/* Tabs */}
      <div>
        <ul className={style.tabs}>
          <li>
            <FaXTwitter className={style.tabIcon} />
          </li>
          <li>
            <GrHomeRounded className={style.tabIcon} />
            Home
          </li>
          <li>
            <IoIosSearch className={style.tabIcon} /> Explore
          </li>
          <li>
            <IoNotificationsOutline className={style.tabIcon} /> Notifications
          </li>
          <li>
            <MdOutlineMailOutline className={style.tabIcon} /> Messages
          </li>
          <li>
            <PiBookmarkSimpleLight className={style.tabIcon} /> Bookmarks
          </li>
          <li>
            <IoPeopleOutline className={style.tabIcon} /> Communities
          </li>
          <li>
            <IoPersonOutline className={style.tabIcon} /> Profile
          </li>
          <li>
            <CiCircleMore className={style.tabIcon} /> More
          </li>
        </ul>

        <button className={style.postButton}>Post</button>
      </div>

      {/* User Profile */}
      <div className={style.usercontainer}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
          alt="user img"
          className={style.userlogo}
        />
        <div>
          <p className={style.userFullName}>Celson Paixão</p>
          <p className={style.userNickName}>@celsonpaixao</p>
        </div>
        <IoIosMore />
      </div>
    </div>
  );
};

export default SideBar;
