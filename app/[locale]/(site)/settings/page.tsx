import { FirstHeading } from "@/app/components/global/Heading";
import { GlobalSettings } from "@/app/components/settings";
import { Sidebar } from "@/app/components/settings/Sidebar";

export const metadata = {
  title: "Future - Your Settings",
  description: "Future",
};

const SettingsPage: React.FC = () => {
  return (
    <>
      <section className="h-screen">
        <FirstHeading>Your profile</FirstHeading>
        <GlobalSettings />
        <Sidebar />
      </section>
    </>
  );
};

export default SettingsPage;
