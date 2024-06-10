import React  from 'react';
import '../scss/components/_data-block.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store";
import {setCurrentPage} from "../app/postsSlice";
import {gsap} from "gsap";



export const DataBlock = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.posts.currentPage);
    const dates = useSelector((state: RootState) => state.posts.dates[currentPage]);

    const goToPage = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber));
    };







    return (
        <>

            <div className='circle'>
                <svg width="530" height="530" viewBox="0 0 530 530" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle  opacity="0.2" cx="265" cy="265" r="264.5" stroke="#42567A"
                             />
                </svg>
                <div  onClick={() => goToPage(1)}
                className='number-one'
                >
                    <span className='number-one_number'>1</span>
                    <span className='number-one_name'>Наука</span>
                </div>

                <div className='number-two' onClick={() => goToPage(2)}>
                    <span className='number-two_number'>2</span>
                    <span className='number-one_name'>Кино</span>
                </div>

                <div className='number-three' onClick={() => goToPage(3)}>
                    <span className='number-three_number'>3</span>
                    <span className='number-one_name'>Спорт</span>
                </div>

                <div className='number-four' onClick={() => goToPage(4)}>
                    <span className='number-four_number'>4</span>
                    <span className='number-one_name'>Психология</span>
                </div>

                <div className='number-five' onClick={() => goToPage(5)}>
                    <span className='number-five_number'>5</span>
                    <span className='number-one_name'>Гонки</span>
                </div>

                <div className='number-six' onClick={() => goToPage(6)}>
                    <span className='number-six_number'>6</span>
                    <span className='number-one_name'>Мода</span>
                </div>
            </div>

            <div className='date'>
                <span style={{color: "#5D5FEF"}}> {dates[0]}</span>
                <span style={{color: "#EF5DA8"}}> {dates[1]}</span>
            </div>
        </>

    );
};

