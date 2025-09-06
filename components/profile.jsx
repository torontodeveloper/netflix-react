import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import { GiEgyptianProfile } from "react-icons/gi";
import style from "./profile.module.css";

const Profile = () => {
  const { container, profile } = style;
  return (
    <div className={container}>
      <FaMagnifyingGlass />
      <FaRegBell />
      <Dropdown className={profile}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <GiEgyptianProfile />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Manage Profiles</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Transfer Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Account</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Help Center</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default Profile;
