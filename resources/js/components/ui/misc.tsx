// Small OmniaUI pieces with the shadcn names the kit uses: Spinner, Separator, Avatar, Alert, Card, Tooltip.
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Spinner({ className, ...props }: ComponentProps<'span'>) {
    return <span role="status" aria-label="Loading" className={cn('oc-spinner oc-spinner--sm', className)} {...props} />;
}

export function Separator({ className, ...props }: ComponentProps<'hr'>) {
    return <hr className={cn('oc-separator', className)} {...props} />;
}

export function Avatar({ className, ...props }: ComponentProps<'span'>) {
    return <span className={cn('oc-avatar oc-avatar--sm', className)} {...props} />;
}

export function AvatarImage({ src, alt = '', ...props }: ComponentProps<'img'>) {
    return src ? <img src={src} alt={alt} {...props} /> : null;
}

export function AvatarFallback({ children }: { children?: ReactNode; className?: string }) {
    return <>{children}</>;
}

export function Alert({ variant, className, ...props }: ComponentProps<'div'> & { variant?: 'default' | 'destructive' }) {
    return <div role="alert" className={cn('oc-alert', variant === 'destructive' ? 'oc-alert--danger' : 'oc-alert--info', className)} {...props} />;
}

export function AlertTitle({ className, ...props }: ComponentProps<'p'>) {
    return <p className={cn('oc-alert-title', className)} {...props} />;
}

export function AlertDescription({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('oc-alert-description', className)} {...props} />;
}

export function Card({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('oc-card', className)} {...props} />;
}

export function CardHeader({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('oc-card-header', className)} {...props} />;
}

export function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
    return <h3 className={cn('oc-card-title', className)} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps<'p'>) {
    return <p className={cn('oc-card-description', className)} {...props} />;
}

export function CardContent({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('oc-card-content', className)} {...props} />;
}

/** OmniaUI tooltips are CSS only (oc-tooltip with data-tooltip); the provider is kept so app.tsx stays familiar. */
export function TooltipProvider({ children }: { children: ReactNode; delayDuration?: number }) {
    return <>{children}</>;
}
