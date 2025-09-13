import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input, InputPassword } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SocialButton, SocialLogin } from '@/components/ui/social-login';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#1F6B4A] via-[#F8F0E0] to-[#1F6B4A]">
            {/* Decorative blurred circles */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#1F6B4A] opacity-30 blur-3xl"></div>
            <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#1F6B4A] opacity-20 blur-2xl"></div>
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F0E0] opacity-40 blur-2xl"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md rounded-2xl px-8 py-10 backdrop-blur">
                <AuthLayout title="Selamat Datang Kembali" description="Masuk ke akun Homfine Anda">
                    <Head title="Login Homfine" />
                    <Form {...AuthenticatedSessionController.store.form()} resetOnSuccess={['password']}>
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            placeholder="email@example.com"
                                            icon="mail"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <InputPassword
                                            id="password"
                                            name="password"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="current-password"
                                            placeholder="********"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Checkbox id="remember" name="remember" tabIndex={1} />
                                        <Label htmlFor="remember">Ingat saya</Label>
                                        {canResetPassword && (
                                            <TextLink href={request()} className="ml-auto text-sm text-xs" tabIndex={5}>
                                                Lupa password?
                                            </TextLink>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-[#1F6B4A] py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1F6B4B] hover:from-homfine-green/90 hover:shadow-xl focus:ring-2 focus:ring-homfine-green focus:outline-none disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
                                        tabIndex={4}
                                        disabled={processing}
                                    >
                                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                        Log in
                                    </Button>
                                </div>

                                <div className="my-6 flex items-center">
                                    <div className="h-px flex-1 bg-gray-200" />
                                    <span className="px-3 text-sm text-gray-400">atau</span>
                                    <div className="h-px flex-1 bg-gray-200" />
                                </div>

                                <SocialLogin>
                                    <SocialButton
                                        type="link"
                                        href="/auth/google"
                                        ariaLabel="Login with Google"
                                        icon="google.png"
                                        labelName="Google"
                                    />
                                    <SocialButton
                                        type="link"
                                        href="/auth/facebook"
                                        ariaLabel="Login with Facebook"
                                        icon="facebook.png"
                                        labelName="Facebook"
                                    />
                                </SocialLogin>

                                <div className="text-center text-sm text-muted-foreground">
                                    Belum punya akun?{' '}
                                    <TextLink href={register()} tabIndex={5}>
                                        Daftar
                                    </TextLink>
                                </div>
                            </>
                        )}
                    </Form>

                    {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
                </AuthLayout>
            </div>
        </div>
    );
}
