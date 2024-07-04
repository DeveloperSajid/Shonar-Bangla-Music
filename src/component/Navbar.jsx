import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        // Navigation Bar
        <section className='w-full bg-black py-4 font-bold text-white'>
          <div className="container flex justify-between items-center">
          <div className='w-50'>
                Shonar Bangla Music
            </div>
            <div className="w-4/5">
                <ul className='flex items-center gap-x-5 justify-end'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
            </div>
          </div>
        </section>
    )
}

export default Navbar