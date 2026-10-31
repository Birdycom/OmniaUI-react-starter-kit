import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

/** A native checkbox styled by OmniaUI (oc-checkbox): it posts with the form like any input. */
export function Checkbox({ className, ...props }: Omit<ComponentProps<'input'>, 'type'>) {
    return <input type="checkbox" className={cn('oc-checkbox', className)} {...props} />;
}
