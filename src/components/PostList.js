import React, { useEffect, useState } from 'react'
import { PaginationButtonsList } from './PaginationButtonsList'
import { fetchPosts } from '../api/fetchPosts';
import { Post } from './Post';


const PostList = () => {
    const [pageNum, setPageNum]=useState(1);
    const [postData, setPostdata]=useState([]);
    
useEffect(()=>{
    const fechFun=async ()=>{
        const data = await fetchPosts(pageNum);
        setPostdata([...data]);
    }
    fechFun();
},[pageNum]);


    return (
        <>
{postData.map((ele, ind)=><Post ind={ind} ele={ele}/>)}
<PaginationButtonsList setPageNum={setPageNum}/>
        </>
    )
}

export { PostList }