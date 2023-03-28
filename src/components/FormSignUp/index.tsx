import Link from "next/link";
import { AccountCircle, Lock } from "@styled-icons/material-outlined";
import { EmailOutline } from "@styled-icons/evaicons-outline";

import Button from "components/Button";
import { FormWrapper, FormLink } from "components/Form";
import TextField from "components/TextField";

const FormSignUp = () => {
  return (
    <FormWrapper>
      <form action="">
        <TextField
          name="name"
          placeholder="Name"
          type="text"
          icon={<AccountCircle />}
        />
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
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
        />
        <Button size="large" fullWidth>
          Sign up now
        </Button>
        <FormLink>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignUp;
