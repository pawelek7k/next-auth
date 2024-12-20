"use client";

import { BooksGrid } from "@/app/components/home/BooksGrid";
import { BooksList } from "@/app/components/home/BooksList";
import type { Book } from "@/types/book";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { CiBoxList, CiGrid41 } from "react-icons/ci";
import { Loader } from "../global/Loader";

interface ClientSideComponentProps {
  books: Book[];
  userLibrary: string[];
}

const Sidebar = dynamic(() => import("@/app/components/home/Sidebar"), {
  ssr: false,
  loading: () => <Loader />,
});

const ClientSideComponent: React.FC<ClientSideComponentProps> = ({
  books,
  userLibrary,
}) => {
  const [filters, setFilters] = useState({ search: "", genre: "" });
  const [viewMode, setViewMode] = useState<"grid" | "list" | null>(null);
  const t = useTranslations("global");
  useEffect(() => {
    const savedViewMode = localStorage.getItem("viewMode") as
      | "grid"
      | "list"
      | null;
    setViewMode(savedViewMode || "list");
  }, []);

  useEffect(() => {
    if (viewMode) {
      localStorage.setItem("viewMode", viewMode);
    }
  }, [viewMode]);

  const handleFilterChange = (filters: { search: string; genre: string }) =>
    setFilters(filters);

  const handleViewChange = (mode: "grid" | "list") => setViewMode(mode);

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesGenre = !filters.genre || book.genre === filters.genre;
    return matchesSearch && matchesGenre;
  });

  if (viewMode === null) return <Loader />;

  return (
    <div>
      <div>
        <ul className="flex gap-16 mt-4">
          {[t("list"), t("grid")].map((mode) => (
            <li key={mode}>
              <button
                onClick={() => handleViewChange(mode as "grid" | "list")}
                className={`flex items-center justify-center gap-2 p-2 ${
                  viewMode === mode ? "text-sky-950 dark:text-rose-800" : ""
                }`}
              >
                {mode === t("list") ? <CiBoxList /> : <CiGrid41 />}
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Sidebar onFilterChange={handleFilterChange} />
      {viewMode === t("grid") ? (
        <BooksGrid books={filteredBooks} />
      ) : (
        <BooksList books={filteredBooks} userLibrary={userLibrary} />
      )}
    </div>
  );
};

export default ClientSideComponent;
