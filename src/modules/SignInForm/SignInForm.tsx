import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import ButtonSend from "../../shared/components/ButtonSend/ButtonSend";

import { fetchUserByUsername } from "../../shared/redux/auth/auth-thunks";
import { fields } from "./fields";
import { selectorAuth } from "../../shared/redux/auth/auth-selector";

import type { AppDispatch } from "../../shared/redux/store";
import type { AuthFormData } from "../../shared/types/form";

import styles from "./SignInForm.module.css";
import TextField from "../../shared/components/TextField/TextField";



const SignInForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error } = useSelector(selectorAuth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFormData>();

const onSubmit = ({ username }: AuthFormData) => {
  dispatch(fetchUserByUsername(username));
  reset();
};

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <div>
      {!user && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.textField}>
          <TextField
            register={register}
              error={errors.username}
              name="username"
              rules={fields.username.rules}
              type={fields.username.type}
              placeholder={fields.username.placeholder}
              className={styles.input}
          />
          <TextField
            register={register}
              error={errors.email}
              name="email"
              rules={fields.email.rules}
              type={fields.email.type}
              placeholder={fields.email.placeholder}
              className={styles.input}
          />
          <ButtonSend type="submit">Sign In</ButtonSend>
        </form>
      )}
    </div>
  );
};

export default SignInForm;
