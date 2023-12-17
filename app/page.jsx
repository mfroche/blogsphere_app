import React from 'react'
import Feed from '@components/Feed';
const Home = () => {
    return (
        <section className='w-full flex-col'>
            <div className='flex flex-row'>
                <img
                    src="/assets/images/cover.png"
                    alt='Left Image'
                    className='left-image'
                    width={659}
                    height={400}
                />
                <div className='text-content ps-8'>
                    <h1 className='head_text'>
                        <span className='pink_violet_gradient text-center'>BlogSphere</span>
                        <br />Unleash Your Creativity.
                    </h1>
                    <p className='desc'>
                        Welcome to BlogSphere – a blogging platform where creativity and expression collide! We celebrate the art of storytelling, encouraging writers, thinkers, and creators of all kinds to share their unique perspectives and experiences. <br />BlogSphere is your gateway to a world with inspiration and possibilities.
                    </p>
                </div>
            </div>

            <Feed />

        </section>


    )
}

export default Home;