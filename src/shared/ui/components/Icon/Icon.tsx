import React, { type FC, type SVGProps } from "react";

import CalendarBoldIcon from "../../icons/CalendarBoldIcon.svg?react";
import CalendarIcon from "../../icons/CalendarIcon.svg?react";
import CustomersBoldIcon from "../../icons/CustomersBoldIcon.svg?react";
import CustomersIcon from "../../icons/CustomersIcon.svg?react";
import DashboardBoldIcon from "../../icons/DashboardBoldIcon.svg?react";
import DashboardIcon from "../../icons/DashboardIcon.svg?react";
import DealsBoldIcon from "../../icons/DealsBoldIcon.svg?react";
import DealsIcon from "../../icons/DealsIcon.svg?react";
import LogoIcon from "../../icons/LogoIcon.svg?react";
import NotificationsBoldIcon from "../../icons/NotificationsBoldIcon.svg?react";
import NotificationsIcon from "../../icons/NotificationsIcon.svg?react";
import SearchIcon from "../../icons/SearchIcon.svg?react";
import SettingsBoldIcon from "../../icons/SettingsBoldIcon.svg?react";
import SettingsIcon from "../../icons/SettingsIcon.svg?react";
import TasksBoldIcon from "../../icons/TasksBoldIcon.svg?react";
import TasksIcon from "../../icons/TasksIcon.svg?react";
import ToastClose from "../../icons/ToastClose.svg?react";
import ToastFire from "../../icons/ToastFire.svg?react";
import ToastFirework from "../../icons/ToastFireWork.svg?react";
import AddIcon from "../../icons/addIcon.svg?react";

export type NavIconName =
  | "dashboard"
  | "deals"
  | "customers"
  | "tasks"
  | "calendar"
  | "notifications"
  | "settings";

type NavIconNameBold = `${NavIconName}Bold`;
type StaticIcons = "add" | "logo" | "search";
export type ToastIcons = "fire" | "firework" | "close";

export type IconName = ToastIcons | StaticIcons | NavIconName | NavIconNameBold;

const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  add: AddIcon,
  logo: LogoIcon,
  search: SearchIcon,
  dashboard: DashboardIcon,
  dashboardBold: DashboardBoldIcon,
  deals: DealsIcon,
  dealsBold: DealsBoldIcon,
  tasks: TasksIcon,
  tasksBold: TasksBoldIcon,
  customers: CustomersIcon,
  customersBold: CustomersBoldIcon,
  calendar: CalendarIcon,
  calendarBold: CalendarBoldIcon,
  notifications: NotificationsIcon,
  notificationsBold: NotificationsBoldIcon,
  settings: SettingsIcon,
  settingsBold: SettingsBoldIcon,
  firework: ToastFirework,
  fire: ToastFire,
  close: ToastClose,
};

interface IconProps {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name }) => {
  const IconComponent = icons[name];
  return <IconComponent />;
};
