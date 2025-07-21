import React from "react";

import cl from "./styles.module.scss";

type HeadingLevelType = "h1" | "h5";

interface ContentHeaderProps {
  headingLevel: HeadingLevelType;
  text: string;
}
export const ContentHeader = ({ headingLevel, text }: ContentHeaderProps) => {
  const HeadingElem = headingLevel as keyof React.JSX.IntrinsicElements;
  return (
    <div className={cl.title}>
      <HeadingElem>{text}</HeadingElem>
    </div>
  );
};
