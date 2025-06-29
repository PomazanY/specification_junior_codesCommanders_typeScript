import type { ReactNode } from "react";
import styles from "./ButtonSend.module.css"

type ButtonInfo = {
  children: ReactNode;
  type: "button" | "submit" | "reset"; 
  onClick?: () => void;
};

const ButtonSend = (buttonInfo: ButtonInfo) => {
    return (
        <button
      type={buttonInfo.type}
      className={styles.btn}
      onClick={buttonInfo.onClick} 
    >
      {buttonInfo.children}
    </button>
    )
}
export default ButtonSend;
