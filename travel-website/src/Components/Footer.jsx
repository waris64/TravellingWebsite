import React from 'react'
const Footer = () => {
    return (
        <div className='bg-[#000000] text-white '>
            <div className='flex flex-col justify-between md:px-8'>
                <div className='flex justify-between px-4   '>
                    <div className='pt-10 pb-4 text-white'>
                        <h1 className='text-4xl'>Trippy</h1>
                        <p className='text-2xl'>Choose your favourite destination</p>
                    </div>
                    <div className='flex gap-x-4 pt-10'>
                        <i class="fa-brands fa-square-facebook  text-4xl cursor-pointer hover:text-[#01959a]"></i>
                        <i class="fa-brands fa-square-instagram text-4xl cursor-pointer hover:text-[#01959a]"></i>
                        <i class="fa-brands fa-square-twitter text-4xl cursor-pointer hover:text-[#01959a]"></i>
                        <i class="fa-brands fa-linkedin text-4xl cursor-pointer hover:text-[#01959a]"></i>
                    </div>

                </div>
                <div className='flex justify-between'>
                    <div className='px-4 py-6 '>
                        <h1 className='text-2xl md:text-xl font-bold pb-4'>Project</h1>
                        <div className='flex flex-col gap-y-2'>
                            <a href="#" className='text-xl'>Cheglog</a>
                            <a href="" className='text-xl'>Status</a>
                            <a href="" className='text-xl'>License</a>
                            <a href="" className='text-xl'>All Versions</a>
                        </div>
                    </div>
                    <div className='px-4 py-6'>
                        <h1 className='text-2xl md:text-xl font-bold pb-4'>Community</h1>
                        <div className='flex flex-col gap-y-2'>
                            <a href="#" className='text-xl'>Github</a>
                            <a href="" className='text-xl'>Issues</a>
                            <a href="" className='text-xl'>Project</a>
                            <a href="" className='text-xl'>Twitter</a>
                        </div>
                    </div>
                    <div className='px-4 py-6'>
                        <h1 className='text-2xl md:text-xl font-bold pb-4'>Help</h1>
                        <div className='flex flex-col gap-y-2'>
                            <a href="#" className='text-xl'>Support</a>
                            <a href="" className='text-xl'>Troubleshooting</a>
                            <a href="" className='text-xl'>Contact Us</a>
                        </div>
                    </div>
                    <div className='px-4 py-6'>
                        <h1 className='text-2xl md:text-xl font-bold pb-4'>Others</h1>
                        <div className='flex flex-col gap-y-2'>
                            <a href="#" className='text-xl'>Terms of Service</a>
                            <a href="" className='text-xl'>Privacy Policy</a>
                            <a href="" className='text-xl'>License</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;