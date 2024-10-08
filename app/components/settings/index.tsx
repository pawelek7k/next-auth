import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SecondHeading, ThirdHeading } from "../global/Heading";
import { DarkModeSwitch } from "./Darkmode";
import { ImagePicker } from "./UserImgPicker";

export const GlobalSettings: React.FC = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <div className="flex flex-col gap-20 mt-10">
        <div className="flex  items-start  justify-center gap-20">
          <div className="flex flex-col items-center">
            <ImagePicker />
            <div className="text-center flex flex-col gap-2">
              <ThirdHeading>display name</ThirdHeading>
              <p>{session.user?.username}</p>
            </div>
          </div>
          <div>
            <ul className="flex w-96 justify-between pt-10 pb-10 border-b border-sky-950 dark:border-rose-50">
              <li>
                <button className="flex flex-col items-center">
                  <span>Work:</span>
                  <span>0</span>
                </button>
              </li>
              <li>
                <button className="flex flex-col items-center">
                  <span>Followers:</span>
                  <span>0</span>
                </button>
              </li>
              <li>
                <button className="flex flex-col items-center">
                  <span>Following:</span>
                  <span>0</span>
                </button>
              </li>
            </ul>
            <p className="pt-10">User Description</p>
          </div>
        </div>
        <div className="flex flex-col shadow-lg p-10 rounded-lg">
          <div className="text-center mb-10">
            <SecondHeading>Your settings</SecondHeading>
          </div>
          <ul className="flex flex-col gap-6  justify-center">
            <li>
              <div className="flex items-center justify-between">
                <ThirdHeading>Color theme:</ThirdHeading>
                <DarkModeSwitch />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <ThirdHeading>Language:</ThirdHeading>
                Lang Switcher
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
