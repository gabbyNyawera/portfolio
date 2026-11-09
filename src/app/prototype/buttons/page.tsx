import { SiteHeader } from "@/components/site-header";
import { ButtonsPrototype } from "@/components/prototype/buttons-prototype";

export default async function ButtonsPrototypePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const raw = (await searchParams).buttons;
  return (
    <>
      <SiteHeader />
      <ButtonsPrototype variant={typeof raw === "string" ? raw : undefined} />
    </>
  );
}
