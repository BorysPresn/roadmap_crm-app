import { AddNewChooserContent } from "../addNewModal/AddNewChooserContent.tsx";
import { CreateCustomerForm } from "./ModalForms/CreateCustomerForm.tsx";
import CreateDealForm from "./ModalForms/CreateDealForm.tsx";
import { CustomerList } from "./ModalForms/CustomerList.tsx";
import type { ModalConfig, ModalKey } from "./types";

export const modalConfig: Record<ModalKey, ModalConfig> = {
  addNew: {
    title: "Add New",
    size: "small",
    renderBody: (ctx) => (
      <AddNewChooserContent
        onChooseDeal={() => ctx.setActiveModal("selectCustomer")}
        onChooseCustomer={() => ctx.setActiveModal("createCustomer")}
      />
    ),
  },
  selectCustomer: {
    title: "Select Customer",
    size: "medium",
    headerAction: {
      label: "Add New",
      onClick: (setActiveModal) => setActiveModal("createCustomer"),
    },
    renderBody: () => <CustomerList />,
  },
  createDeal: {
    title: "Create Deal",
    size: "medium",
    renderBody: () => <CreateDealForm />,
  },
  createCustomer: {
    title: "Create Customer",
    size: "medium",
    renderBody: () => <CreateCustomerForm />,
  },
};
