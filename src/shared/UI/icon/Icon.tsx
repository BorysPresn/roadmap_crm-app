import React, { type FC, type SVGProps } from "react";

import ToastFire from "../assets/emoji/ToastFire.svg?react";
import ToastFirework from "../assets/emoji/ToastFireWork.svg?react";
import CalendarBoldIcon from "../assets/icons/CalendarBoldIcon.svg?react";
import CalendarIcon from "../assets/icons/CalendarIcon.svg?react";
import CustomersBoldIcon from "../assets/icons/CustomersBoldIcon.svg?react";
import CustomersIcon from "../assets/icons/CustomersIcon.svg?react";
import DashboardBoldIcon from "../assets/icons/DashboardBoldIcon.svg?react";
import DashboardIcon from "../assets/icons/DashboardIcon.svg?react";
import DealsBoldIcon from "../assets/icons/DealsBoldIcon.svg?react";
import DealsIcon from "../assets/icons/DealsIcon.svg?react";
import LogoIcon from "../assets/icons/LogoIcon.svg?react";
import NotificationsBoldIcon from "../assets/icons/NotificationsBoldIcon.svg?react";
import NotificationsIcon from "../assets/icons/NotificationsIcon.svg?react";
import SearchIcon from "../assets/icons/SearchIcon.svg?react";
import SettingsBoldIcon from "../assets/icons/SettingsBoldIcon.svg?react";
import SettingsIcon from "../assets/icons/SettingsIcon.svg?react";
import TasksBoldIcon from "../assets/icons/TasksBoldIcon.svg?react";
import TasksIcon from "../assets/icons/TasksIcon.svg?react";
import ToastClose from "../assets/icons/ToastClose.svg?react";
import AddIcon from "../assets/icons/addIcon.svg?react";

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
