import React from 'react';
const Blogs = () => {
    return (
        <div className='w-[80%] mx-auto py-2  px-2 my-3 '>
            <div className='px-5 pb-5 mb-5 rounded-lg bg-indigo-500 text-gray-200 text-justify py-5'>
                <p className='text-2xl font-semibold '>What is context API?</p>
                <p className='mt-3'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
            </div>
            <div className='px-5 pb-5 mb-5 rounded-lg bg-indigo-500 text-gray-200 text-justify py-5'>
                <p className='text-2xl font-semibold'>What is Semantic tag?</p>
                <p  className='mt-3'>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, p tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.</p>
            </div>
            <div className='px-5 pb-5 mb-5 rounded-lg bg-indigo-500 text-gray-200 text-justify py-5'>
                <p className='text-2xl font-semibold'>Inline Vs Inline Block Vs Block</p>
                <div className='py-3'>
                    <p className='font-semibold'>Inline</p>
                    <p>Every HTML element is a block in the shape of a rectangle or a square and owns a display property. Unless explicitly specified, all of values set - with the exception of table and its associated elements. It's important to recognize how these HTML elements behave because they are the building blocks of our layouts. Examples:- a tag , span tag, strong tag</p>
                </div>
                <div className='py-3'>
                    <p className='font-semibold'>Inline Block</p>
                    <p>Inline blocks are very similar in nature as inline elements.everything that inline does but can also be set some widths Examples:- input tag,button tag, select tag ,textarea tag</p>
                </div>
                <div className='py-3'>
                    <p className='font-semibold'>Block</p>
                    <p>The block elements always start on a new line.It means that there can be no other HTML elements that can stand side by side with block level elements. You are also able to give set width/height and vertical margins.Examples:- p tag, div tag, h1-h6 tag, header tag</p>
                </div>
               
            </div>
        </div>

    );
};

export default Blogs;