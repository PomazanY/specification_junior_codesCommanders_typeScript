import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./ButtonSignIn.module.css"

interface ButtonSignInProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children?: ReactNode;
}


const ButtonSignIn = ({ title, type = "button", children, ...props }: ButtonSignInProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signin'); 
    };

    return (
        <button
            onClick={handleClick}
            type={type}
            title={title}
            className={styles.btn}
            {...props}
        >
            {title || children}
        </button>
    )
}
export default ButtonSignIn;


