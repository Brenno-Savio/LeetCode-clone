"use client";

import Link from "next/link";

import Ipad from "@/components/ipad/Ipad";
import texts from "../context/texts";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row row-span-1 justify-between mx-12 my-24">
        <section className="mx-5">
          <Ipad />
        </section>
        <section className="text-white items-center justify-center flex flex-wrap mx-5">
          <h1 className="text-4xl font-medium">{texts.titleHomePage}</h1>
          <span className="text-center font-normal text-gray-400 px-10">{texts.descHomePage}</span>
          <Link href={'/'} className="">Create Account</Link>
        </section>
      </div>
    </div>
  );
}
