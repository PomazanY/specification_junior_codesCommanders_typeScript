import type { ReactNode } from "react";
import styles from "./ButtonSend.module.css"

type ContainerProps = {
  children: ReactNode;
  type: "button" | "submit" | "reset"; 
  onClick?: () => void;
};

const ButtonSend = ({ children, type, onClick }: ContainerProps) => {
    return (
        <button
      type={type}
      className={styles.btn}
      onClick={onClick} 
    >
      {children}
    </button>
    )
}
export default ButtonSend;
