import React from 'react'
import Feed from '@components/Feed';
const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center '>

                <span className='pink_violet_gradient text-center'>AI SPEAK</span>
                <br />blog your prompts
            </h1>
            <p className='desc text-center'>
                AI Speak is your portal to the world of AI-powered creativity. Unlock new forms of expression and exploration with AI prompts. Discover, learn, and connect in a vibrant community.
            </p>

            <Feed />

        </section>


    )
}

export default Home;