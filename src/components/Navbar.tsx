import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import { NAV_LINKS } from '@/data/data'
import Link from 'next/link'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div className={`bg-alabasterPeach sticky z-[9999] top-0 inset-x-0`}>
            <header className="relative">
                <MaxWidthWrapper>
                    <div className="flex justify-between items-center py-5 w-full">
                        <div className="aspect-[195/40] w-[195px] max-w-full relative">
                            <Image 
                                src={"/brand-logo.svg"}
                                fill
                                alt="Brand Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <ul className="flex gap-x-8">
                                {NAV_LINKS.map((item, index) => {
                                    return (
                                        <li key={`NavLink--${item.id}`} className="py-3 px-4">
                                            <Link href={item.link} className="text-mutedMidnightBlue inline-block text-base font-medium">{item.label}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                            <Button className='w-full max-w-[170px] px-6 text-base'>Book Now</Button>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar
