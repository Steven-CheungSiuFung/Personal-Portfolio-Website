import { signIn } from "next-auth/react";
import {
  AuthForm,
  AuthSectionContainer,
  ChangeFormHead,
} from "./auth-section.styles";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import MyText from "../utils/my-text/my-text.component";
import MyButton from "../my-button/my-button.component";
import { colors } from "../utils/colors/colors.styles";
import Spacer from "../utils/spacer/spacer.component";

const defaultFormFields = {
  email: "",
  password: "",
  secretKey: "",
};

const AuthSection = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, secretKey } = formFields;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onChangeFormType = () => {
    console.log("Change Form");
    setIsLogin(!isLogin);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(formFields);

    if (!isLogin) {
      const response = await fetch("/api/auth/create-user", {
        method: "POST",
        body: JSON.stringify(formFields),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("REGISTER RESPONSE ==> ", data);
    } else {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: formFields.email,
          password: formFields.password,
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <AuthSectionContainer>
      <AuthForm onSubmit={onSubmitHandler}>
        <ChangeFormHead onClick={onChangeFormType}>
          <MyText size={"1.5rem"} weight={"500"} color={colors.main}>
            {isLogin ? "LOGIN" : "REGISTER"}
          </MyText>
          <MyText color={colors.tech}>
            {isLogin ? "Change to register" : "Change to login"}
          </MyText>
        </ChangeFormHead>
        <Spacer position={"top"} size={"1rem"} />
        <FormInput
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={onChangeHandler}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
        />
        {!isLogin && (
          <FormInput
            label="Secret-Key"
            type="text"
            name="secretKey"
            value={secretKey}
            onChange={onChangeHandler}
          />
        )}
        <MyButton buttonTypes={"base"}>
          {isLogin ? "Login" : "Register"}
        </MyButton>
      </AuthForm>
    </AuthSectionContainer>
  );
};

export default AuthSection;
