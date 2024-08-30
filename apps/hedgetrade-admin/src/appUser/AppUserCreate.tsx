import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const AppUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password_hash" source="passwordHash" />
        <NumberInput step={1} label="rank" source="rank" />
        <SelectInput
          source="role"
          label="role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="username" source="username" />
        <TextInput label="wallet_address" source="walletAddress" />
      </SimpleForm>
    </Create>
  );
};
