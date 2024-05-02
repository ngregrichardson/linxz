import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: "noindex, nofollow",
}

const NotFound = () => {
    return <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="text-6xl font-extrabold">Not Found</h1>
      <p>Either you&apos;re wrong or we&apos;re wrong, and we&apos;re all out of wrong.</p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
}

export default NotFound;