'use client';

import Link from 'next/link';
import { FC } from 'react';

import themes from '../../context/themes';

interface Props {}

const Navbar: FC<Props> = ({}) => {

  return (
    <nav className="flex items-center justify-between sm:px-12 px-2 md:px24">
      <Link href={'/'} className="flex items-center justify-center h-20">
        <img src="/logo-02.png" alt="logo" className='w-80' />
      </Link>
      <div className="flex items-center font-normal text-sm w-full justify-end">
        <Link href={'/'} className={`${themes.navLinkPremium} border-primary border`}>
          Premium
        </Link>
        <Link href={'/'} className={`${themes.navLink}`}>
          Explore
        </Link>
        <Link href={'/'} className={`${themes.navLink}`}>
          Product
        </Link>
        <Link href={'/'} className={`${themes.navLink}`}>
          Developer
        </Link>
        <Link href={'/accounts/login'} className={`${themes.navLink}`}>
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
