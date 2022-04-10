import React from 'react';
import { Link } from 'react-router-dom';
import useCar from '../../usehooks/useCar';
import p1 from '../../img/top-car.png'
import HomeReview from '../HomeReview/HomeReview';
 const Home = () => {
     //hooks
    const [cars] = useCar();
    let getCar= cars.slice(0, 3);

    return (
        <div>
            <div className='grid md:grid-cols-2  justify-items-center align-items-center px-4 py-5 bg-[#bbd05d] width-full'>
                <div className='md:order-2 order-1'>
                    <h1 className='md:text-[30px] text-xl text-white  mb-10'>Shift to success mode.</h1>
                    <p className='text-white mb-3'>A Car is a essential things for every person. . We all have one dream to buy our dream car. A Car can change your daily life and also add more styles to your personality. Do you want to find out best car which will be the best for you? Then, here you are. We have the best collections of modern cars. You can find your favourite car from us with the reasonable price. So, why are you waiting? Check out our latests collections and be the owner of your dream car.</p>
                    <Link to='/books' type="button" className="py-3 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-lime-600 rounded-full border border-gray-200">Latest Collection</Link>
                </div>
                <div className=' px-1 py-1 rounded-lg md:order-1 order-2'>
                    <img className='rounded-lg w-72' src={p1} alt="" />
                </div>
            </div>
            <div className='bg-[#f9305f] py-5'>
                <h1 className='text-4xl text-white'>Customer Reviews</h1>
                <div className='grid md:grid-cols-3 justify-center items-center w-[70%] mx-auto gap-5 my-10  px-3 py-3 rounded'>
                    {
                        getCar.map(car => <HomeReview
                            car={car}
                            key={car.id}

                        ></HomeReview>)
                    }
                </div>
                <div className='mt-5'>
                    <Link to='/review' type="button" className="py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sell All Reviews </Link>
                </div>
                 <br />
                
            </div>
        </div>
    );
};

export default Home;