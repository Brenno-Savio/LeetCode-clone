'use client';

import Link from 'next/link';

import Card from '@/components/card/Card';
import Ipad from '@/components/ipad/Ipad';
import texts from '../context/texts';

export default function Home() {
  return (
    <div>
      <div className="flex flex-row row-span-1 justify-between mx-12 my-24">
        <section className="mx-5 rotate-[-12deg]">
          <Ipad />
        </section>
        <section className="text-white items-center justify-center flex flex-wrap mx-5">
          <h1 className="text-4xl font-medium">{texts.titleHomePage}</h1>
          <span className="text-center text-lg font-normal text-gray-400 px-10">
            {texts.descHomePage}
          </span>
          <Link
            href={'/'}
            className="py-2 px-3 bg-secondary rounded-l-full rounded-r-full"
          >
            Create Account {'>'}
          </Link>
        </section>
      </div>
      <div className='flex flex-row row-span-2 mx-24 my-32'>
        <section className='w-[600px] text-end flex flex-col'>
          <h2 className="text-2xl font-semibold text-secondary my-2">
            {texts.subTitleHomePage}
          </h2>
          <span className="text-end text-gray-400 my-2 ml-36">
            {texts.descSubHomePage}
          </span>
          <Link href={'/'} className='text-blue-600'>Get Started {'>'}</Link>
        </section>
        <section className='mx-24 ease-bounce animate-ease-in-out'>
          <Card color='bg-sky-400' gradientColor='from-sky-300' />
        </section>
      </div>
    </div>
  );
}
