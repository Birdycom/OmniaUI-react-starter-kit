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
        <div className="align-items-center p-inline-2 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0 relative grid h-dvh flex-col justify-center">
            <div className="none app-surface-muted p-2.5 text-white lg:flex relative h-full flex-col dark:border-r">
                <div className="inset-0 bg-black-30 absolute" />
                <Link
                    href={home()}
                    className="align-items-center font-1.1 font-medium relative z-20 flex"
                >
                    <AppLogoIcon className="mr-0.5 size-8 text-white fill-current" />
                    {name}
                </Link>
            </div>
            <div className="lg:p-2 w-full">
                <div className="m-inline-auto space-y-6 flex w-full flex-col justify-center">
                    <Link
                        href={home()}
                        className="align-items-center lg:hidden relative z-20 flex justify-center"
                    >
                        <AppLogoIcon className="h-2.5 text-black sm:h-12 fill-current" />
                    </Link>
                    <div className="align-items-flex-start gap-0.5 sm:align-items-center sm:text-center flex flex-col text-left">
                        <h1 className="font-1.2 font-medium">{title}</h1>
                        <p className="font-0.8 app-fg-muted text-balance">
                            {description}
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
