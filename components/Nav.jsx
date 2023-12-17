"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }

        setUpProviders();
    }, [])

    return (
        <nav className='flex-between w-full mb-16 pt-4'>
            <Link href="/" className='flex gap-2 flex-center'>
                <Image src="/assets/images/logo.png" className='object-contan' width={35} height={35} alt="Logo" />
                <p className='logo_text'>BlogSphere</p>
            </Link>


            <div className='sm:flex hidden'>{
                session?.user ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/create-prompt' className='black_btn'>
                            Create Post
                        </Link>

                        <button type='button' onClick={signOut} className='outline_btn'>
                            Sign Out
                        </button>

                        <Link href='/profile'>
                            <Image src={session?.user.image}
                                className='object-contan'
                                width={37}
                                height={37}
                                alt="Profile Picture"
                            />

                        </Link>
                    </div>
                ) : (<>
                    {providers && Object.values(providers).map((provider) => (
                        <button type='button'
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className='black_btn'>
                            Sign In
                        </button>
                    ))}
                </>)}
            </div>
        </nav >
    )
}

export default Nav