import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-16 h-16",
  lg: "w-24 h-24",
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = "md" }) => (
  <img
    src={src}
    alt={alt}
    className={`rounded-full object-cover ${sizeClasses[size]}`}
  />
);

export default Avatar;
