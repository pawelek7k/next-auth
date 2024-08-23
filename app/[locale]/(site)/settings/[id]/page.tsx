"use client";

import { AccountContainer } from "@/app/components/settings/Account";
import { Sidebar } from "@/app/components/settings/Sidebar";
import { useParams } from "next/navigation";

const SettingPage = () => {
  const { id } = useParams();

  const renderContent = () => {
    switch (id) {
      case "account":
        return <AccountContainer />;
      case "notifications":
        return <div>Notifications Settings</div>;
      case "security":
        return <div>Security Settings</div>;
      case "privacy":
        return <div>Privacy Settings</div>;
      default:
        return <div>Unknown settings section</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4">{renderContent()}</div>
    </div>
  );
};

export default SettingPage;
