import { useState } from "react";

const usePostHooks = (initialPost = []) => {
    const [posts, setPosts] = useState(initialPost);
    const deletePost = (id) => {
        const remainingPost = posts.filter((post) => post.id !== id);
        setPosts(remainingPost);
    };

    return {
        posts,
        deletePost,
    };
};

export default usePostHooks;
