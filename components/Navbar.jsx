import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import styles from "./Navbar.module.css";

const NavBar = () => {
  const { container } = styles;
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className={container}
    >
      <Nav.Item>
        <Link href="/home">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/tvshows">TV Shows</Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/movies">Movies</Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/games">Games</Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/newpopular">New & Popular</Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/mylist">My List</Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/browselang">Browse by Languages</Link>
      </Nav.Item>
    </Nav>
  );
};
export default NavBar;
