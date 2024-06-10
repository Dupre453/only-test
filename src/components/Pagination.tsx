import React from 'react';
import '../scss/components/_pagination.scss'
import {setCurrentPage} from '../app/postsSlice'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store";
import { gsap } from 'gsap';
export const Pagination = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.posts.currentPage);

    const goToPage = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber));

    };

    return (
        <div className='pagination-block'>
            <div className='pagination-block__pages'><span>{currentPage < 10 ? `0${currentPage}` : currentPage}</span>/06
            </div>
            <div className='switches'>
                <button
                    onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}
                    className='switches-left'
                >
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2"/>
                    </svg>

                </button>
                <button
                    onClick={() => goToPage(currentPage + 1)} disabled={currentPage === 6}
                    className='switches-right'
                >
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="#42567A" strokeWidth="2"/>
                    </svg>

                </button>
            </div>
        </div>
    );
};

