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
                    width={600}
                    height={350}
                />
                <div className='text-content ps-8'>
                    <h1 className='head_text'>
                        <span className='pink_violet_gradient text-center'>PromptHub</span>
                        <br />Create & Share.
                    </h1>
                    <p className='desc'>
                        Welcome to PromptHub – a platform where one can share creative writing prompts! We celebrate the art of storytelling, encouraging writers, thinkers, and creators of all kinds to share their unique perspectives and talent. <br />BlogSphere is your gateway to a world with inspiration and possibilities.
                    </p>
                </div>
            </div>

            <Feed />

        </section>


    )
}

export default Home;