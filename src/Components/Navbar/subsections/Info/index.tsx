import React from 'react'

type Props = {}

export function Info(props: Props) {
  return (
    <div className='w-full flex flex-wrap justify-between mx-2 '>
      <div className='w-full text-white mb-8'>
        <h2 className='font-bold text-2xl'>Movies Night</h2>
        <p>This project was created for the technical challenge of Rather Labs</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center w-full'>
        <ul className='px-4 w-full lg:w-1/4   pb-6 pt-6 lg:pt-3'>
          <div className='flex items-center'>
            <svg
              className='h-8 mb-3 mr-3 fill-current text-white'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z' />
            </svg>
            <h3 className='font-bold text-xl text-white text-bold mb-2'>Jorge Ignacio Garay</h3>
          </div>
          <p className='text-gray-100 text-sm'>
            Front-end lover looking for opportunities to seize new trends. I’m able to work under
            pressure, taking advantage of all resources available or looking for new ones in order
            to creatively solve potential issues. I’m comfortable with deadlines and team work. In
            my experience, I’ve managed to gather information so as to compare and improve apps
            employing several tools
          </p>
          <div className='flex items-center py-3'>
            <svg
              className='h-6 pr-3 fill-current text-blue-300'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z' />
            </svg>
            <a
              href='https://www.linkedin.com/in/jorgeignaciogaray/'
              className='text-white bold border-b-2 border-blue-300 hover:text-blue-300'
              target='_blank'
              rel='noreferrer'
            >
              Find out more...
            </a>
          </div>
        </ul>
      </div>
    </div>
  )
}
