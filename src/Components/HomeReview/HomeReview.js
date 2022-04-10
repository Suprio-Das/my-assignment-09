import React from 'react';
 const HomeReview = ({car}) => {
    const { name, comment, ratings } = car;
    return (
        <div >
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 md:h-80 py-1 px-3">
                <div className="flex flex-col items-center pb-10">
                    {/* <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={img} alt="" /> */}
                    <h5 className="mb-5 mt-3 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-md mb-5 text-gray-600 dark:text-gray-500">Ratings: {ratings}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400" title={comment}>
                    {comment.length >200 ? comment.slice(0,200) +'.....Read More' : comment }
                    </span>

                </div>
            </div>
           
        </div>
    );
};

export default HomeReview;