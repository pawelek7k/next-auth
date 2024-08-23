import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ClientSideComponent from "@/app/components/home/ClientSideComponent";
import { connectToDatabase } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

interface Book {
  _id: string;
  title: string;
  cover: string;
  description: string;
  forAdult: boolean;
  genre: string;
  tags: string[];
}

export const metadata = {
  title: "Future - Home",
  description: "Future",
};

const HomeAuthPage: React.FC = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  let client;
  let books: Book[] = [];

  try {
    client = await connectToDatabase();
    const db = client.db();
    const booksCollection = db.collection("books");

    const booksData = await booksCollection
      .find(
        {},
        {
          projection: {
            _id: 1,
            title: 1,
            cover: 1,
            description: 1,
            forAdult: 1,
            genre: 1,
            tags: 1,
          },
        }
      )
      .toArray();

    books = booksData.map((book) => ({
      _id: book._id.toString(),
      title: book.title,
      cover: book.cover,
      description: book.description,
      forAdult: book.forAdult,
      genre: book.genre,
      tags: book.tags,
    }));
  } catch (error) {
    console.error("Error connecting to the database or fetching books:", error);
  } finally {
    if (client) {
      await client.close();
    }
  }

  return <ClientSideComponent books={books} session={session} />;
};

export default HomeAuthPage;
