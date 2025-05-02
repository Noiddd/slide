import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Welcome to Slide
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md">
          Unleash the power of chat marketing
        </p>
        <Button asChild size="lg">
          <Link href="/sign-in">Login</Link>
        </Button>
      </div>
    </main>
  );
}
