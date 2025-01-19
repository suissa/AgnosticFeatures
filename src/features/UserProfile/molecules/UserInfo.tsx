import React from "react";
import Avatar from "../atoms/Avatar";

interface UserInfoProps {
  name: string;
  email: string;
  avatar: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, avatar }) => (
  <div className="flex items-center space-x-4">
    <Avatar src={avatar} alt={name} size="lg" />
    <div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{email}</p>
    </div>
  </div>
);

export default UserInfo;
