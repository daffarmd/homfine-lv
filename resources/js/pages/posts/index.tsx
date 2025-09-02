import React from 'react';
import { Link, usePage } from '@inertiajs/react';


interface Post {
    id: number;
    title: string;
    content: string;
}

interface PageProps {
    posts: Post[];
    [key: string]: any;
}

export default function Index(){
    const { posts } = usePage<PageProps>().props;
    return (
        <div className='p-4 space-y-4'>
            <h1 className='text-2xl font-bold'>Post</h1>
            <Link href="/posts/create" className='text-blue-500 hover:underline'>Create New</Link>
            <ul className='list-disc list-inside space-y-2'>
                {posts.map((p) => (
                    <li className='text-blue-500 hover:underline' key={p.id}>{p.title} - {p.content}</li>
                ))}
            </ul>
        </div>
    )
}