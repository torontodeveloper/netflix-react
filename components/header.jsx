import NavBar from "./Navbar";
import styles from "./header.module.css";
import Logo from "./Logo";
import Profile from "./profile";

const Header = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <Logo />
      <NavBar />
      <Profile />
    </div>
  );
};

export default Header;
