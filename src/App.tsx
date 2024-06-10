import React, {useLayoutEffect} from "react";
import './scss/components/_app.scss'
import {DataBlock} from "./components/DataBlock";
import {NameBlock} from "./components/NameBlock";
import {Slider} from "./components/Slider";
import {Pagination} from "./components/Pagination";
import {useSelector} from "react-redux";
import {RootState} from "./app/store";
import axios from "axios";

 const App: React.FC = () => {
     const currentPage = useSelector((state: RootState) => state.posts.currentPage);
     const [posts, setPosts] = React.useState([]);


     React.useEffect(() => {
         console.log("SET POSTS", currentPage)
         const fetchPosts = async () => {
             const response = await axios.get(`http://localhost:3030/posts?_page=${currentPage}&_per_page=5`);
             setPosts(response.data.data);
             /*setTimeout(() => setLoading(false), 1000);*/
         };
         fetchPosts();

     }, [currentPage]);

     return (
        <div className='container'>
            <div className='line left-line'></div>
            <div className="line horizontal-line"></div>
            <div className="line vertical-line"></div>
            <div className='line right-line'></div>
                <NameBlock/>
            <div className='content-container'>
            <div content='content'>
                <DataBlock/>
                <Pagination/>
                        <Slider posts={posts}/>
            </div>
            </div>
        </div>
    )
}
export default App

