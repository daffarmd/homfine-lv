import { Head, Link } from '@inertiajs/react';
import { CheckCircle, Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { useState } from 'react';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <Head title="Register Homfine" />
            {/* Left Side */}
            <div className="flex items-center justify-center bg-gradient-to-br from-[#1F6B4A] via-[#2C8C5A] to-[#D4A237] p-8 md:w-1/2">
                <div className="max-w-md">
                    <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Buat Akun Anda</h2>
                    <ul className="space-y-4 text-lg text-white/90">
                        <li className="flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5 text-[#F8F0E0]" />
                            Keamanan data terjamin
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5 text-[#F8F0E0]" />
                            Sinkronisasi real-time
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5 text-[#F8F0E0]" />
                            Analisis keuangan cerdas
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right Side (Form) */}
            <div className="flex items-center justify-center bg-[#F8F0E0] md:w-1/2">
                <div className="mx-4 my-8 w-full max-w-md rounded-2xl border border-[#F8F0E0] bg-white/80 px-8 py-10 shadow-xl backdrop-blur-md">
                    <h2 className="mb-2 text-center text-2xl font-bold text-[#1F6B4A]">Daftar</h2>
                    <p className="mb-6 text-center text-[#1F6B4A]">Isi detail Anda untuk memulai</p>
                    <form className="space-y-5">
                        {/* Nama Lengkap */}
                        <div>
                            <label className="mb-1 block font-medium text-[#1F6B4A]">Nama Lengkap</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <User className="h-5 w-5" />
                                </span>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-gray-500 bg-white/90 py-2 pr-4 pl-11 text-black focus:ring-2 focus:ring-[#1F6B4A] focus:outline-none"
                                    placeholder="Nama Lengkap"
                                    required
                                />
                            </div>
                        </div>
                        {/* Email */}
                        <div>
                            <label className="mb-1 block font-medium text-[#1F6B4A]">Email</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <Mail className="h-5 w-5" />
                                </span>
                                <input
                                    type="email"
                                    className="w-full rounded-lg border border-gray-500 bg-white/90 py-2 pr-4 pl-11 text-black focus:ring-2 focus:ring-[#1F6B4A] focus:outline-none"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>
                        {/* Password */}
                        <div>
                            <label className="mb-1 block font-medium text-[#1F6B4A]">Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <Lock className="h-5 w-5" />
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full rounded-lg border border-gray-500 bg-white/90 py-2 pr-10 pl-11 text-black focus:ring-2 focus:ring-[#1F6B4A] focus:outline-none"
                                    placeholder="********"
                                    required
                                />
                                <button
                                    type="button"
                                    tabIndex={-1}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-[#1F6B4A]"
                                    onClick={() => setShowPassword((v) => !v)}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                        {/* Konfirmasi Password */}
                        <div>
                            <label className="mb-1 block font-medium text-[#1F6B4A]">Konfirmasi Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <Lock className="h-5 w-5" />
                                </span>
                                <input
                                    type={showConfirm ? 'text' : 'password'}
                                    className="w-full rounded-lg border border-gray-500 bg-white/90 py-2 pr-10 pl-11 text-black focus:ring-2 focus:ring-[#1F6B4A] focus:outline-none"
                                    placeholder="********"
                                    required
                                />
                                <button
                                    type="button"
                                    tabIndex={-1}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-[#1F6B4A]"
                                    onClick={() => setShowConfirm((v) => !v)}
                                >
                                    {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="w-full rounded-lg bg-[#1F6B4A] py-2 font-semibold text-white transition hover:bg-[#155837]">
                            Daftar
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm text-black/70">
                        Sudah punya akun?{' '}
                        <Link href="/login" className="font-medium text-[#1F6B4A] hover:underline">
                            Masuk
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
