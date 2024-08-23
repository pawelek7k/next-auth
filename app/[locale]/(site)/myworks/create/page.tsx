import { CreateForm } from "@/app/components/create/FormContainer";

export const metadata = {
  title: "Future - Create your book",
  description: "Future",
};

export default async function CreateAuthPage() {
  return (
    <>
      <CreateForm />
    </>
  );
}
