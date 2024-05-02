import { CreateLink } from "@/components/createLink";
import { unstable_noStore as noStore } from "next/cache";

export default function Home() {
  noStore();
  return (
    <main className="flex min-h-screen max-w-4xl m-auto flex-col items-center justify-center p-24 gap-10">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-extrabold text-4xl">Lin<span className="text-primary">x</span>z</h1>
        <h2>Dead simple links, deleted whenever <em className="underline text-primary">you</em> decide</h2>
      </div>
      <CreateLink cftsSiteKey={process.env.NEXT_PUBLIC_CFTS_SITE_KEY} />
    </main>
  );
}

export const runtime = 'edge';
