import React, { useState, useEffect, useMemo, memo } from "react";
import MainLayout from "../components/mainLayout";

function Post() {
    const [posts, setposts] = useState([]);
    const [arr, setarr] = useState("");
    useEffect(() => {
        async function load() {
            const response = await fetch("http://localhost:4200/posts");
            const json = response.json();
            console.log(json);
            setposts(json);
        }
        load();
    }, []);
    return (
        <MainLayout>
            <h1>You Are in Posts</h1>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </MainLayout>
    );
}
export default Post;
