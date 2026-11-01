import { Link } from '@inertiajs/react';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type Props = ComponentProps<typeof Link>;

export default function TextLink({
    className = '',
    children,
    ...props
}: Props) {
    return (
        <Link
            className={cn(
                'ease-out underline underline-offset-4 transition-colors duration-300',
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
