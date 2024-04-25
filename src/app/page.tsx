import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";
import { getMyImages } from "~/server/db/queries";
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (<div className="flex flex-wrap justify-center gap-4">
    {images.map(image => (
      <div key={image.id} className="w-48 p-4">

        <Image width={500} height={500} alt={image.name} style={{objectFit: "contain"}} src={image.url} />
        <div>{image.name}</div>
      </div>
    ))}
  </div>);
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
