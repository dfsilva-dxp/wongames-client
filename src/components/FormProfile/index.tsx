import Button from "components/Button";
import Heading from "components/Heading";
import TextField from "components/TextField";

import * as S from "./styles";

const FormProfile = () => {
  return (
    <>
      <Heading size="small" lineBottom color="black">
        My profile
      </Heading>

      <S.Form>
        <TextField
          name="name"
          placeholder="Name"
          label="Name"
          initialValue="John Cage"
        />

        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          label="E-mail"
          initialValue="john.cage@email.com"
          disabled
        />

        <TextField
          name="password"
          type="password"
          placeholder="Type your password"
          label="Password"
        />

        <TextField
          name="new_password"
          type="password"
          placeholder="New password"
          label="New password"
        />

        <Button size="large">Save</Button>
      </S.Form>
    </>
  );
};

export default FormProfile;
