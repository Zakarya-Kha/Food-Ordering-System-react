import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='border border-gray-700 text-white md:flex  text-center justify-around mt-8 py-4 grid grid-cols-2 '>
      <div className='text-white '>
      <span className='text-2xl font-bold'>zaki</span>
        <span className='text-2xl font-bold text-yellow-600'>Food</span>
        <p>© 2023 Bundl Technologies Pvt. Ltd</p>
      </div>

      <div className='mb-5'>
        <h1 className='text-2xl '>Company</h1>
        <p>ZakiFood</p>
        <p>Feeding Pakistan</p>
        <p>Blinkits</p>
        <p>Works with Us</p>
        <p>Terms of Use</p>
        <p>Sitemap</p>
        
      </div>

      <div>
        <h1 className='text-2xl '>For Resturents</h1>
        <p>Partner with Us</p>
        <p>Apps for You</p>
        
      </div>

      <div>
        <h1 className='text-2xl '>Learn more</h1>
        <p>Privacy</p>
        <p>Security</p>
        <p>Teams</p>
        <p>Sitemap</p>
        
      </div>

      <div className=''>
        <h1 className='text-2xl '>Social Links</h1>
        <div className='flex gap-3 text-xl'>
        <CiFacebook />
        <CiYoutube />
        <FaInstagram />
        <FaLinkedin />
        </div>
      </div>
    </div>
  )
}

export default Footer
