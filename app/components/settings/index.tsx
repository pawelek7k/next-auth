import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectToDatabase } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { UserProfile } from "./UserProfile";

export const GlobalSettings: React.FC = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  let user;
  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection("users");
    user = await usersCollection.findOne({ email: session.user?.email });
  } catch (error) {
    console.error("Error retrieving user data:", error);
  }

  return (
    <>
      <UserProfile username={user?.username} email={user?.email} />
    </>
  );
};
