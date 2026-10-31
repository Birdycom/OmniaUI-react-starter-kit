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
        <div className="flex min-h-svh flex-col align-items-center justify-center gap-1.5 p-1.5 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col align-items-center gap-1">
                        <Link
                            href={home()}
                            className="flex flex-col align-items-center gap-0.5 font-medium"
                        >
                            <div className="mb-0.2 flex h-2.2 w-2.2 align-items-center justify-center round-3">
                                <AppLogoIcon className="size-9 fill-current text-[var(--foreground)] dark:text-white" />
                            </div>
                            <span className="sr-only">{title}</span>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="font-1.2 font-medium">{title}</h1>
                            <p className="text-center font-0.8 app-fg-muted">
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
