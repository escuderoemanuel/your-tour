import React from 'react';
import './Header.css';
import Image from 'next/image';
const logo = 'https://i.ibb.co/7rcr25z/airplane.png';
import NavLinks from '../NavLinks/NavLinks';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = () => {
  return (
    <section className={`headerSection flex flex-row py-6 px-16 justify-between items-center 	sticky z-50 top-0 bg-red-600`}>
      <div className={`flex items-center text-center bg-amber-400 gap-1`}>
        <Image
          className='headerLogo'
          src={logo}
          width={60}
          height={60}
          alt="Picture of the author"
        />
        <div className={`flex-col text-start ms-4`}>
          <h1>Your Tour</h1>
          <h3>Turism Agency</h3>
        </div>
      </div>
      <NavLinks />
      <LanguageSelector />
    </section>
  );
}

export default Header;
