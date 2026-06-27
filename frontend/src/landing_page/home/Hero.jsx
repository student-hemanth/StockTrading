import React from 'react';

function Hero() {
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='/homeHero.png' alt='Hero Image' className='mb-5 img-fluid w-75 mx-auto' />
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5 px-5'>Sign up now</button>

            </div>
        </div>
    );
}

export default Hero;