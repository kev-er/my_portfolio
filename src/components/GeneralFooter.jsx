import React from 'react'

const GeneralFooter = () => {
    return (
        <footer className='relative mt-auto flex flex-col items-center text-gray-300 mb-6 gap-2 md:flex-row md:justify-evenly'>
            
            <div className='flex gap-x-4 md:order-last'>
                <a className='text-4xl hover:text-primary-color hover:animate-bounce' target='_blank' href="https://github.com/kev-er">
                    <i className='bx bxl-github' ></i>
                </a>

                <a className='text-4xl hover:text-primary-color hover:animate-bounce' target='_blank' href="https://www.linkedin.com/in/kev-holm/">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>
            </div>

            <p className='md:order-2'>Kevin Holm • Copyright ©2025 | All rights reserved • </p>
        </footer>
    )
}

export default GeneralFooter
