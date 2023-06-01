import React, { useEffect, useState } from 'react'
import { PaginationButtonsList } from './PaginationButtonsList'
import { fetchPosts } from '../api/fetchPosts';
import { Post } from './Post';


const PostList = () => {
    const [pageNum, setPageNum]=useState(1);
    const [postData, setPostdata]=useState([]);
    const [isLoder, setIsLodar]=useState(false);
    
useEffect(()=>{
    const fechFun=async ()=>{
        setIsLodar(true);
        const data = await fetchPosts(pageNum);
        setPostdata([...data]);
        setIsLodar(false);
    }
    fechFun();
},[pageNum]);

if(isLoder){
    return(
        <div id="loader" >Lodar.....</div>
    )
}
    return (
        <>
{postData.map((ele, ind)=><Post ind={ind} ele={ele}/>)}
<PaginationButtonsList setPageNum={setPageNum}/>
        </>
    )
}

export { PostList }