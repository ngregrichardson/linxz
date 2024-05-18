import { CreateLink } from "@/components/createLink";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-4xl m-auto flex-col items-center justify-center p-4 gap-10">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-extrabold text-4xl">Lin<span className="text-primary">x</span>z</h1>
        <h2 className="hidden sm:block">Dead simple links, deleted whenever <em className="underline text-primary">you</em> decide</h2>
      </div>
      <CreateLink />
    </main>
  );
}