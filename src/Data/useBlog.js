import { useEffect, useState } from "react";

const useBlog = () => {
    const [blogs,setBlogs] = useState(null)
    useEffect(()=>{
        fetch('Blog.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[])
    return {blogs}
};

export default useBlog;