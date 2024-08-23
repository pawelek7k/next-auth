import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { FirstWord } from "@/app/components/global/FirstWord";
import { FirstHeading } from "@/app/components/global/Heading";
import { getBookDetails } from "@/lib/getDetails";
import { getServerSession } from "next-auth/next";
import Image from "next/legacy/image";
import { redirect } from "next/navigation";
import styles from "./styles.module.css";

export const metadata = {
  title: "Future - Read the book",
  description: "Future",
};

interface DetailsDynamicPageProps {
  params: { bookId: string };
}

const DetailsDynamicPage: React.FC<DetailsDynamicPageProps> = async ({
  params,
}) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const { bookId } = params;
  const book = await getBookDetails(bookId);

  if (!book) {
    return <section>Book not found</section>;
  }

  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col items-center shadow-lg rounded-lg">
        <div className="flex p-10 gap-12">
          <div className="relative overflow-hidden rounded-md w-48 h-80">
            <Image
              src={book.cover}
              alt={book.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="flex flex-col gap-4">
            <FirstHeading>{book.title}</FirstHeading>
            <p>{book.description}</p>
            <p className="text-gray-700 dark:text-neutral-100">
              <FirstWord>For Adult:</FirstWord> {book.forAdult ? "Yes" : "No"}
            </p>
            <p className="text-gray-700 dark:text-neutral-100">
              <FirstWord>Genre: </FirstWord>
              {book.genre}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          className={styles.contentContainer}
          dangerouslySetInnerHTML={{ __html: book.content }}
        />
      </div>
    </section>
  );
};

export default DetailsDynamicPage;
