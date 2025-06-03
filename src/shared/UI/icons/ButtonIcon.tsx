import React, { type FC } from "react";

import { AddIcon } from "./ButtonIcons.tsx";

type IconName = "add";

const icons: Record<IconName, FC> = {
  add: AddIcon,
};

interface IconProps {
  name: IconName;
}

export const ButtonIcon: React.FC<IconProps> = ({ name }) => {
  const IconComponent = icons[name];
  return <IconComponent />;
};
