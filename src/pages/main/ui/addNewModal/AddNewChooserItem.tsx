import { Icon, type IconName } from "@shared/ui";

import cl from "./styles.module.scss";

export interface AddNewChooserItemProps {
  icon: IconName;
  title: string;
  onChoose: () => void;
}
export const AddNewChooserItem = ({
  icon,
  title,
  onChoose,
}: AddNewChooserItemProps) => (
  <button className={cl.item} onClick={onChoose}>
    <Icon name={icon} />
    <p>{title}</p>
    <Icon name="arrowRightBlue" />
  </button>
);
