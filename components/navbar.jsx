import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from "react-icons/fa";



export default function navbar() {
    const [isOpen, setisOpen] = useState (false)
  return (
      <nav className='bg-blue-950 py-4'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-xl text-white'>
                <div>
                    <h4 className='font-bold text-2xl'>MisteraDev</h4>
                </div>
                  <button
                      onClick={() => setisOpen(!isOpen)}
                      className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden'
                  >
                      <FaBars
                          className={`lg:block text-2xl text-white ${isOpen ? "hidden" : "block"}`}
                      />
                      <FaTimes
                          className={`lg:block text-2xl text-white ${isOpen ? "block" : "hidden"}`}
                      />
                  </button>
                  <div className='w-full lg:block lg:w-auto'>
                        <ul className={`lg:block items-center flex flex-col p-4 lg:p-0 mt-4 rounded-lg bg-black/20 lg:bg-blue-950 lg:flex-row lg:space-x-8 lg:mt-0 font-semibold uppercase ${isOpen ? "block" : "hidden"}`}>
                                    <li className='lg:inline-block mr-5'><Link href="/">Home</Link></li>
                                    <li className='lg:inline-block mr-5'><Link href="/about">About us</Link></li>
                                    <li className='lg:inline-block mr-5'><Link href="/">Priceing</Link></li>
                                    <li className='lg:inline-block mr-5'><Link href="/">Project</Link></li>
                                    <li className='lg:inline-block mr-5'><Link href="/">Contact</Link></li>
                                </ul>
                  </div>
          </div>         
      </nav>
  )
}
