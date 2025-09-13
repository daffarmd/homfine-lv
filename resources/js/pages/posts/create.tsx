import { useForm } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import { FormEvent } from 'react';

export default function Create() {
    const { data, setData, post, errors } = useForm({
        title: '',
        content: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault(); // agar tidak reload halaman

        post('/posts', {
            onSuccess: () => {
                window.location.href = '/posts'; // redirect ke halaman posts
            },
        });
    };

    return (
        <div className="p-4">
            <button onClick={() => window.history.back()} className="mb-4 flex items-center gap-2 text-blue-500 hover:text-blue-700">
                <ChevronLeft className="h-4 w-4 hover:text-blue-700" /> Back
            </button>
            <h1 className="mb-4 text-2xl">Create Post</h1>
            <form onSubmit={submit} className="flex flex-col gap-4">
                <input className="border p-2" value={data.title} onChange={(e) => setData('title', e.target.value)} placeholder="Title" />
                {errors.title && <div className="text-red-500">{errors.title}</div>}
                <textarea
                    className="border p-2"
                    value={data.content}
                    onChange={(e) => setData('content', e.target.value)}
                    placeholder="Content"
                ></textarea>
                {errors.content && <div className="text-red-500">{errors.content}</div>}
                <button type="submit" className="bg-blue-500 p-2 text-white">
                    Create Post
                </button>
            </form>
        </div>
    );
}
