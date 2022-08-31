import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl  tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:tracking-tight lg:text-6xl">
                <span className="block">Growing confidence</span>
                <span className="block text-purple-700">with music</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Powerful learning through musical play. Research-based music and movement curricula, classes, and more. Come learn, listen, and play with us! 
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-900 md:py-4 md:text-lg md:px-10">
                    Learn More
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-teal-200 hover:bg-teal-400 md:py-4 md:text-lg md:px-10">
                    Enroll in Classes
                  </Link>
                </div>
              </div>
              </div>
            </div>
            <div className="hidden overflow-hidden my-2 h-100 md:block md:mt-0 md:mb-5 md:h-auto md:max-h-[650px]">
              <StaticImage
                src="../images/Hero-Image.jpg"
                alt="RMStudios"

              />        
            </div>
          </div>
          {/*The Card Section*/}
          <div className="px-0 mx-2 my-14 grid grid-cols-1 md:grid-cols-3 gap-x-5 lg:gap-x-10 gap-y-2 md:gap-y-5 md:px-10">
            <Link to='#' className="bg-pink-700 rounded-lg shadow-xl min-h-[300px] md:duration-150 md:transform md:hover:scale-110">
              <h1 className="text-white py-2 text-4xl text-center font-semibold content-center">Foundations</h1>
              <p className="text-white mx-8 mb-4 text-justify font-semibold tracking-wide h-20">
                The Foundations Class is designed for parents and their babies to attend together!
              </p>
              <h1 className="rounded-md text-white bg-pink-900 mx-8 py-1 text-center text-2xl font-semibold content-center">AGES: 0-18 MONTHS</h1>
            </Link>
            <Link to='#' className="bg-purple-400 rounded-lg shadow-xl text-center min-h-[300px] md:duration-150 md:transform md:hover:scale-110">
              <h1 className="text-purple-700 py-2 text-4xl font-semibold content-center">Level 2</h1>
              <p className="text-purple-700 mx-8 mb-4 text-justify font-semibold tracking-wide h-20">
                Level 2 is for toddlers that can walk and move around on their own!
              </p>
              <h1 className="rounded-md text-white bg-purple-700 mx-8 py-1 text-center text-2xl font-semibold content-center">AGES: 1.5-3 YEARS</h1>
            </Link>
            <Link to='#' className="bg-teal-200 rounded-lg shadow-xl text-center min-h-[300px] md:duration-150 md:transform md:hover:scale-110">
              <h1 className="text-teal-700 py-2 text-4xl font-semibold content-center">Level 3</h1>
              <p className="text-teal-700 mx-8 mb-4 text-justify font-semibold tracking-wide h-20">
                Level three is for toddlers who can dance and sing!
              </p>
              <h1 className="rounded-md text-white bg-teal-700 mx-8 py-1 text-center text-2xl font-semibold content-center">AGES: 3-4 YEARS</h1>
            </Link>
          </div>
        </div>

    </Layout>
  )
}

export default IndexPage