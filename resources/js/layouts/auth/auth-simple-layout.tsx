import { Link } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="align-items-center gap-1.5 p-1.5 md:p-10 flex min-h-svh flex-col justify-center">
            <div className="max-w-sm w-full">
                <div className="gap-2 flex flex-col">
                    <div className="align-items-center gap-1 flex flex-col">
                        <Link
                            href={home()}
                            className="align-items-center gap-0.5 font-medium flex flex-col"
                        >
                            <div className="mb-0.2 h-2.2 w-2.2 align-items-center round-3 flex justify-center">
                                <AppLogoIcon className="size-9 dark:text-white fill-current text-[var(--foreground)]" />
                            </div>
                            <span className="sr-only">{title}</span>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="font-1.2 font-medium">{title}</h1>
                            <p className="font-0.8 app-fg-muted text-center">
                                {description}
                            </p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
