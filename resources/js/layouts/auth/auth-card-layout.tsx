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
        <div className="align-items-center gap-1.5 app-surface-muted p-1.5 md:p-10 flex min-h-svh flex-col justify-center">
            <div className="max-w-md gap-1.5 flex w-full flex-col">
                <Link
                    href={home()}
                    className="align-items-center gap-0.5 align-self-center font-medium flex"
                >
                    <div className="h-2.2 w-2.2 align-items-center flex justify-center">
                        <AppLogoIcon className="size-9 text-black dark:text-white fill-current" />
                    </div>
                </Link>

                <div className="gap-1.5 flex flex-col">
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
