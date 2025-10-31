import { AddNewChooserItem } from "./AddNewChooserItem.tsx";

import cl from "./styles.module.scss";

interface AddNewChooserContentProps {
  onChooseDeal: () => void;
  onChooseCustomer: () => void;
}
export const AddNewChooserContent = ({
  onChooseDeal,
  onChooseCustomer,
}: AddNewChooserContentProps) => (
  <>
    <ul className={cl.list}>
      <li>
        <AddNewChooserItem
          key="Deal"
          icon="deals"
          title="Deal"
          onChoose={onChooseDeal}
        />
      </li>
      <li>
        <AddNewChooserItem
          key="Customer"
          icon="customers"
          title="Customer"
          onChoose={onChooseCustomer}
        />
      </li>
    </ul>
  </>
);
