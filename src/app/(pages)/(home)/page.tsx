import MainNav from "@/components/layout/MainNav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="text-white p-3 md:p-14 md:pt-10 bg-gradient-to-t from-slate-800 to-gray-900 min-h-screen ">
        <MainNav />
        <div></div>
      </main>
    </>
  );
}
