import { Link } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';
import AppLogoIcon from '@/components/app-logo-icon';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { home } from '@/routes';

export default function AuthCardLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {
    return (
        <div className="flex min-h-svh flex-col align-items-center justify-center gap-1.5 app-surface-muted p-1.5 md:p-10">
            <div className="flex w-full max-w-md flex-col gap-1.5">
                <Link
                    href={home()}
                    className="flex align-items-center gap-0.5 align-self-center font-medium"
                >
                    <div className="flex h-2.2 w-2.2 align-items-center justify-center">
                        <AppLogoIcon className="size-9 fill-current text-black dark:text-white" />
                    </div>
                </Link>

                <div className="flex flex-col gap-1.5">
                    <Card className="round-6">
                        <CardHeader className="p-inline-2.5 pt-2 pb-0 text-center">
                            <CardTitle className="font-1.2">{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-inline-2.5 p-block-2">
                            {children}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
