import type { InertiaLinkProps } from '@inertiajs/react';

type ClassValue = string | false | null | undefined | 0 | Record<string, boolean | undefined>;

/** Joins class names (OmniaCSS needs no class merging: utilities sit in their own cascade layer). */
export function cn(...inputs: ClassValue[]) {
    return inputs
        .flatMap((input) => (input && typeof input === 'object' ? Object.keys(input).filter((key) => input[key]) : [input]))
        .filter(Boolean)
        .join(' ');
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}
