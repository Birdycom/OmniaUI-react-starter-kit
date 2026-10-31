import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

/** OmniaUI input (oc-input); aria-invalid gives the error look. */
export function Input({ className, type = 'text', ...props }: ComponentProps<'input'>) {
    return <input type={type} className={cn('oc-input', className)} {...props} />;
}
