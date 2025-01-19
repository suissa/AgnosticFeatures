import React from "react";
import InputField from "../molecules/InputField";

interface UserProfileFormProps {
  name: string;
  email: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const UserProfileForm: React.FC<UserProfileFormProps> = ({
  name,
  email,
  onNameChange,
  onEmailChange,
  onSubmit,
}) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}
    className="space-y-4"
  >
    <InputField id="name" label="Name" value={name} onChange={onNameChange} />
    <InputField
      id="email"
      label="Email"
      type="email"
      value={email}
      onChange={onEmailChange}
    />
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Save
    </button>
  </form>
);

export default UserProfileForm;
