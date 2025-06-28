import styles from "./TextField.module.css";
import { useId } from "react";
import type { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

import type { AuthFormData } from "../../types/form";

interface TextFieldProps {
  name: keyof AuthFormData;
  register: UseFormRegister<AuthFormData>;
  error?: FieldError;
  rules?: RegisterOptions<AuthFormData, keyof AuthFormData>;
  className?: string;
  type?: string;
  placeholder?: string;
}

const TextField = ({
  register,
  error,
  name,
  rules = {},
  className = "",
  ...props
}: TextFieldProps) => {
  const id = useId();
  return (
    <div>
      <input
        {...register(name, rules)}
        {...props}
        id={id}
        className={`${styles.input} ${className}`}
      />
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
};

export default TextField;
