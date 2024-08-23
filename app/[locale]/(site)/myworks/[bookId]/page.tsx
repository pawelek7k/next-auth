import { RichTextEditor } from "@/app/components/editor";

interface CreateChaptersProps {
  params: {
    bookId: string;
  };
}

const CreateChapters: React.FC<CreateChaptersProps> = ({ params }) => {
  const { bookId } = params;

  return (
    <>
      <RichTextEditor bookId={bookId} />
    </>
  );
};

export default CreateChapters;
