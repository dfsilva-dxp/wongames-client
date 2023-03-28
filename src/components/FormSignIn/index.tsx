import Link from "next/link";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Lock } from "@styled-icons/bootstrap/Lock";

import Button from "components/Button";
import { FormWrapper, FormLink } from "components/Form";
import TextField from "components/TextField";

import * as S from "./styles";

const FormSignIn = () => {
  return (
    <FormWrapper>
      <form action="">
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<EmailOutline />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <S.ForgetPassword href="#">Forgot your password?</S.ForgetPassword>
        <Button size="large" fullWidth>
          Sign in now
        </Button>
        <FormLink>
          Don’t have an account?
          <Link href="/sign-up">Sign up</Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;
