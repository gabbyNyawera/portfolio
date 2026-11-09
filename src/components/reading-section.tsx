import { interests } from "@/content/interests";
import { BookCover } from "@/components/book-cover";

const books = interests.find((interest) => interest.id === "books");

export function ReadingSection() {
  if (!books?.books) return null;

  return (
    <div className="container-page">
      <div className="split-editorial">
        <div>
          <h2 className="display-2">On the shelf</h2>
          <p className="lede mt-6 max-w-xs">{books.description}</p>
        </div>

        <div className="grid grid-cols-3 gap-5 sm:grid-cols-5 sm:gap-6">
          {books.books.map((book) => (
            <figure key={book.title}>
              <BookCover book={book} />
              <figcaption className="mt-3">
                <p className="text-xs font-medium leading-snug text-foreground">
                  {book.title}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                  {book.author}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
