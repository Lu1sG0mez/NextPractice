import { NavBar } from "@/components";
export default function About({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
