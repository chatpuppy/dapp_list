import React from 'react';

import twitter from '../assets/bxl-twitter.svg';
import discord from '../assets/bxl-discord-alt.svg';
import github from '../assets/bxl-github.svg';
import medium from '../assets/bxl-medium.svg';

function Footer() {
  return (
    <div className=" flex h-[4rem]  w-full flex-col content-center items-center text-xs text-darkMajor">
      <div className="flex content-center items-center">
        <div
          className="m-1 rounded-full bg-darkMinor p-1"
          onClick={() => {
            window.location.href = 'https://twitter.com/chatpuppynft';
          }}
        >
          <img src={twitter} className="text-darkMajor" />
        </div>
        <div
          className="m-1 rounded-full bg-darkMinor p-1"
          onClick={() => {
            window.location.href = 'https://discord.gg/QN658sJWkk';
          }}
        >
          <img src={discord} />
        </div>
        <div
          className="m-1 rounded-full bg-darkMinor p-1"
          onClick={() => {
            window.location.href = 'https://github.com/chatpuppy';
          }}
        >
          <img src={github} />
        </div>
        <div
          className="m-1 rounded-full bg-darkMinor p-1"
          onClick={() => {
            window.location.href = 'https://chatpuppy.medium.com/';
          }}
        >
          <img src={medium} />
        </div>
      </div>
      <div className="my-1 flex content-center items-center">
        <div>© 2022 ByteConnect PET Ltd.</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
}

export default Footer;
