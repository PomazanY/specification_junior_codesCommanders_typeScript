import HeaderLogo from "./HeaderLogo/HeaderLogo";
import AuthButton from "../../shared/components/AuthButton/AuthButton";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <HeaderLogo />
      <AuthButton />
    </header>
  );
};

export default Header;
