import { TextField, Button, Typography } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { LoginFormContainer, LoginFormWrapper } from "./index.styles";
import { saveSignInForm } from "src/redux/actions/authActions";
import { useAuth } from "src/hooks/auth";
import { Location, useLocation, useNavigate } from "react-router-dom";

interface Values {
  username: string;
  password: string;
}

interface LocationState extends Location {
  state: {
    path: string;
  };
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation("main", { keyPrefix: "pages.loginPage" });
  const navigate = useNavigate();
  const auth = useAuth();
  const { state } = useLocation() as LocationState;

  const handleSubmit = async (values: Values) => {
    const { username, password } = values;
    dispatch(saveSignInForm({ username: username, password: password }));
    await auth.signIn({ username: username, password: password }).then(() => {
      if (state && state.path && state.path !== "/login") {
        navigate(state.path);
      } else {
        navigate("/products");
      }
    });
  };

  const loginFormValidationSchema = yup.object({
    username: yup.string().required(t("username.error.isRequired")),
    password: yup.string().required(t("password.error.isRequired")),
  });

  const formik = useFormik<Values>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginFormValidationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <LoginFormWrapper>
      <LoginFormContainer onSubmit={formik.handleSubmit}>
        <Typography variant='h4'>{t("header")}</Typography>
        <TextField
          variant='standard'
          label={t("username.text")}
          name={t("username.htmlId")}
          type={t("username.type")}
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.errors.username}
        />
        <TextField
          variant='standard'
          label={t("password.text")}
          name={t("password.htmlId")}
          type={t("password.type")}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.errors.password}
        />
        <Button
          sx={{ mt: 2 }}
          variant='contained'
          type='submit'
          disabled={!(formik.dirty && formik.isValid)}
        >
          {t("submit.text")}
        </Button>
      </LoginFormContainer>
    </LoginFormWrapper>
  );
};

export default Login;
