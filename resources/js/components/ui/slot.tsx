import { cloneElement, isValidElement } from 'react';
import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** asChild support: render the only child with these props and classes merged in (like Radix Slot). */
export function Slot({ children, className, ...props }: HTMLAttributes<HTMLElement> & { children?: ReactNode }) {
    if (!isValidElement(children)) {
        return null;
    }

    const child = children as ReactElement<HTMLAttributes<HTMLElement>>;

    return cloneElement(child, { ...props, ...child.props, className: cn(className, child.props.className) });
}
