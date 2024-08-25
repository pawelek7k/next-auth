import { IoIosNotifications } from "react-icons/io";
import {
  MdManageAccounts,
  MdOutlineSecurity,
  MdPrivacyTip,
} from "react-icons/md";

interface SidebarItem {
  id: string;
  label: string;
  icon?: JSX.Element;
}

export const sidebarItems: SidebarItem[] = [
  { id: "account", label: "Account", icon: <MdManageAccounts /> },
  { id: "notifications", label: "Notifications", icon: <IoIosNotifications /> },
  { id: "security", label: "Security", icon: <MdOutlineSecurity /> },
  { id: "privacy", label: "Privacy", icon: <MdPrivacyTip /> },
];