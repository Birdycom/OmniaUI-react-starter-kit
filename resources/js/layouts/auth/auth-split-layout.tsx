import { Link, usePage } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSplitLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    const { name } = usePage().props;

    return (
        <div className="relative grid h-dvh flex-col align-items-center justify-center p-inline-2 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative none h-full flex-col app-surface-muted p-2.5 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-black-30" />
                <Link
                    href={home()}
                    className="relative z-20 flex align-items-center font-1.1 font-medium"
                >
                    <AppLogoIcon className="mr-0.5 size-8 fill-current text-white" />
                    {name}
                </Link>
            </div>
            <div className="w-full lg:p-2">
                <div className="m-inline-auto flex w-full flex-col justify-center space-y-6">
                    <Link
                        href={home()}
                        className="relative z-20 flex align-items-center justify-center lg:hidden"
                    >
                        <AppLogoIcon className="h-2.5 fill-current text-black sm:h-12" />
                    </Link>
                    <div className="flex flex-col align-items-flex-start gap-0.5 text-left sm:align-items-center sm:text-center">
                        <h1 className="font-1.2 font-medium">{title}</h1>
                        <p className="font-0.8 text-balance app-fg-muted">
                            {description}
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
