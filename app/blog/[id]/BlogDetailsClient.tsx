'use client'
import React from "react"

interface Post {
    id: number
    title: string
    img: string
    category: string
    author: string
    date: string
}

export default function BlogDetailsClient({ blogPost }: { blogPost: Post | null }) {
    if (!blogPost) return <div>Blog post not found.</div>;
    return (
        <>
            {blogPost.title}
        </>
    );
} 