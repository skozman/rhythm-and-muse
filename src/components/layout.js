import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'



const Layout = ({ pageTitle, children }) => {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
  <div>
    <div className="sticky top-0 z-10">

      <nav className="bg-white border-b border-gray-600 shadow-xl px-2 sm:px-4 py-4 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          
            <Link to="/" className="flex items-center">
              <StaticImage
                src="../images/rhythm-and-muse-logo-small.png"
                alt="RMStudios"
                height={100}
                aspectRatio={1/1}
              />
              <span className="self-center h-full align-baseline text-lg font-bryndan lg:text-2xl dark:text-white">Rhythm and Muse</span>
            </Link>
          
          
          <button onClick={() => toggleExpansion(!isExpanded)} 
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden 
          hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400
          dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className={`${ isExpanded ? `block` : `hidden` } w-full md:block md:w-auto`}>
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className="block py-2 pr-4 pl-3 text-sm lg:text-lg text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 dark:text-white" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 pr-4 pl-3 text-sm lg:text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-2 pr-4 pl-3 text-sm lg:text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-2 pr-4 pl-3 text-sm lg:text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Healthy Home
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-2 pr-4 pl-3 text-sm lg:text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Muse Mamas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div> 
      <main>
        {children}
      </main>
    </div>
    <div className="border-t-4 border-gray-600 shadow-outline shadow-xl mt-10 min-h-[500px]">

    </div>
  </div>
  )
}

export default Layout