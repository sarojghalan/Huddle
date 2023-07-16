"use client";
import React from "react";
import Link from "next/link";
const HomePage = () => {
  return (
    <>
    <h1>Welcome to the Saroj Ghalan Next js Practice</h1>
    <ul>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/about'>about</Link></li>
      <li><Link href='/about/team'>team</Link></li>
      <li><Link href='/blog'>blog</Link></li>
    </ul>
    </>
  );
};

export default HomePage;
