const fetchPosts = async (page) => {
    // optionally write fetching logic here or somewhere else
    const response= await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
    const data= await response.json();
    return data;
}

export { fetchPosts }