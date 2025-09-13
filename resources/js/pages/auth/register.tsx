import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input, InputPassword } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

export default function Register() {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#1F6B4A] via-[#F8F0E0] to-[#1F6B4A]">
            {/* Decorative blurred circles */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#1F6B4A] opacity-30 blur-3xl"></div>
            <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#1F6B4A] opacity-20 blur-2xl"></div>
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F0E0] opacity-40 blur-2xl"></div>

            {/* Register Card */}
            <div className="relative z-10 w-full max-w-md rounded-2xl px-8 py-10 backdrop-blur">
                <AuthLayout title="Buat Akun Baru" description="Daftar untuk membuat akun Homfine Anda">
                    <Head title="Register Homfine" />
                    <Form
                        {...RegisteredUserController.store.form()}
                        resetOnSuccess={['password', 'password_confirmation']}
                        className="flex flex-col gap-6"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Nama Lengkap</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            name="name"
                                            placeholder="Nama lengkap Anda"
                                            icon="user"
                                        />
                                        <InputError message={errors.name} className="mt-2" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            tabIndex={2}
                                            autoComplete="email"
                                            name="email"
                                            placeholder="email@example.com"
                                            icon="mail"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <InputPassword
                                            id="password"
                                            required
                                            tabIndex={3}
                                            autoComplete="new-password"
                                            name="password"
                                            placeholder="********"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password_confirmation">Konfirmasi Password</Label>
                                        <InputPassword
                                            id="password_confirmation"
                                            required
                                            tabIndex={4}
                                            autoComplete="new-password"
                                            name="password_confirmation"
                                            placeholder="********"
                                        />
                                        <InputError message={errors.password_confirmation} />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-[#1F6B4A] py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1F6B4B] hover:from-homfine-green/90 hover:shadow-xl focus:ring-2 focus:ring-homfine-green focus:outline-none disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
                                        tabIndex={5}
                                        disabled={processing}
                                    >
                                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                        Daftar
                                    </Button>
                                </div>

                                <div className="text-center text-sm text-muted-foreground">
                                    Sudah punya akun?{' '}
                                    <TextLink href={login()} tabIndex={6}>
                                        Masuk
                                    </TextLink>
                                </div>
                            </>
                        )}
                    </Form>
                </AuthLayout>
            </div>
        </div>
    );
}
