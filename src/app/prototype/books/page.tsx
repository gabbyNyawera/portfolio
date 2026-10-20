import { SiteHeader } from "@/components/site-header";
import { BooksPrototype } from "@/components/prototype/books-prototype";

export default async function BooksPrototypePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const raw = (await searchParams).books;
  return (
    <>
      <SiteHeader />
      <BooksPrototype variant={typeof raw === "string" ? raw : undefined} />
    </>
  );
}
