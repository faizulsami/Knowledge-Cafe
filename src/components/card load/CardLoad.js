import React, { useEffect, useState } from 'react';
import Bookmark from '../bookmark/Bookmark';
import './CardLoad.css'
import { ToastContainer, toast } from 'react-toastify';
import Card from '../card/Card';

const CardLoad = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookMark,setBookmark] = useState([]);
    const [bookmarked, setBookmarked] = useState([]);
    useEffect(() => {
        fetch("db.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data))
    }, []);
    const handleReadTime = (e,blog) =>{
        e.preventDefault();
        const newBookMark = [...bookMark,blog];
        setBookmark(newBookMark)
    }
    const handleBookMark = (Blog) => {
        const newBookMark = [...bookmarked,Blog];
        setBookmarked(newBookMark);
        if (bookmarked.includes(Blog)) {
            toast("Already Added!")
        }
    }
    return (
        <div className="body-container">
            <div className="container text-center">
                <div className="row">
                    <div className="col col-md-8 mt-4">
                        {
                            blogs.map(blog => <Card
                                key={blog.id}
                                data={blog}
                                handleReadTime={handleReadTime}
                                handleBookMark={handleBookMark}
                            ></Card>)
                        }
                    </div>
                    <div className="col col-md-4">
                        <Bookmark
                        key={blogs.id}
                        bookMark={bookMark}
                        bookMarked={bookmarked}
                        ></Bookmark>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardLoad;