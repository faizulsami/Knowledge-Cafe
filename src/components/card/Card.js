import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
    const {author_name,blog_title,blog_cover_image,author_image,read_time,Publish_Date} = props.data;
    const handleReadTime = props.handleReadTime;
    const handleBookMark = props.handleBookMark;
    return (
        <div>
            <div className="card mb-3 border-0 pt-4">
                <img srcSet={blog_cover_image} className="card-img-top rounded-4" alt=""></img>
                    <div className="card-body d-flex justify-content-between mt-3">
                        <div className='d-flex gap-3'>
                        <div>
                            <img srcSet={author_image} className='author-img' alt=""/>
                        </div>
                        <div className='text-start'>
                            <p className='author-name'>{author_name}</p>
                            <p className='publish-date'>{Publish_Date}</p>
                        </div>
                        </div>
                        <div>
                            <p><span className='read-time'>{read_time} min read</span> <span className='fs-4'><FontAwesomeIcon
                            icon={faBookmark}
                            onClick={() => handleBookMark(props.data)}
                            /></span></p>
                        </div>
                    </div>
                    <div className='text-start ps-3'>
                        <p className='blog-title'>{blog_title}</p>
                        <p className='tags'>#beginners #programming</p>
                        <a onClick={(e) => handleReadTime(e,props.data)} className='mark-as-read' href='#'>Mark as read</a>
                    </div>
            </div>
        </div>
    );
};

export default Card;