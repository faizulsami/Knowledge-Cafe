import React from 'react';
import './Bookmark.css'
const Bookmark = (props) => {
    const time = props.bookMark;
    const bookMark = props.bookMarked;
    let totalTime = 0;
    for(const previousTime of time){
        totalTime = totalTime + previousTime.read_time;
    }
    let bookmarkedBlogs = 0;
    for(const previousBookMarked of bookMark){
        bookmarkedBlogs = bookmarkedBlogs + previousBookMarked.book_mark
    }
    return (
        <div className='book-mark-main-container'>
        <div className='mt-5 bookmark-container text-start'>
            <div className='time-container'>
                <p className='mt-2'>Spent time on read : {totalTime} min</p>
            </div>
            <div className='bookmarked-item mt-4 pt-4'>
            <h4 className='ms-3'>Bookmarked Blogs : {bookmarkedBlogs}</h4>
                {
                    bookMark.map((t,index) => <div className='bookmarked' key={index}>
                    <p>{t.blog_title}</p>
                    </div>)
                }
            </div>
        </div>
        </div>
    );
};

export default Bookmark;