import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "is Home?",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-7xl">Pakita</span>
      <Link className="text-xl" href="/about">
        About
      </Link>
    </main>
  );
}
