import React from 'react';
import UserInfo from '../molecules/UserInfo';
import UserProfileForm from '../organisms/UserProfileForm';

interface UserProfileTemplateProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const UserProfileTemplate: React.FC<UserProfileTemplateProps> = ({
  user,
  onNameChange,
  onEmailChange,
  onSubmit,
}) => (
  <div className="max-w-4xl mx-auto p-8">
    <UserInfo name={user.name} email={user.email} avatar={user.avatar} />
    <div className="mt-8">
      <UserProfileForm
        name={user.name}
        email={user.email}
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onSubmit={onSubmit}
      />
    </div>
  </div>
);

export default UserProfileTemplate;
