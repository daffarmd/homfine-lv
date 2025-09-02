import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-2xl">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link href={home()} className="max-auto h-25 w-25 flex flex-col  items-center justify-center rounded-full bg-white px-4 py-4 font-medium shadow-xl">
                                <img src="/3.png
                                " alt="Homfine Icon" className="mb-1 h-12 w-12" />
                            <span className="sr-only">{title}</span>
                        </Link>
                        <h1 className='text-green-800 font-extrabold text-xl'>Homfine</h1>

                        <div className="space-y-2 text-center">
                            <h1 className="text-2xl font-extrabold text-black">{title}</h1>
                            <p className="text-center text-sm text-gray-600">{description}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
