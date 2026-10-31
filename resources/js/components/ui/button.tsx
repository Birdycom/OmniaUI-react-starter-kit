import { buttonClass } from '@birdycom/omniaui-react';
import type { ButtonVariant } from '@birdycom/omniaui-react';
import type { ButtonHTMLAttributes } from 'react';
import { Slot } from '@/components/ui/slot';

// The shadcn Button API on top of the OmniaUI button (oc-btn): same variant and size names as the official kit.
type Variant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type Size = 'default' | 'sm' | 'lg' | 'icon';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
    asChild?: boolean;
};

export function Button({ variant = 'default', size = 'default', asChild = false, className, type, ...props }: Props) {
    const classes = buttonClass({
        variant: variant as ButtonVariant,
        size: size === 'default' || size === 'icon' ? 'md' : size,
        icon: size === 'icon',
        className,
    });

    if (asChild) {
        return <Slot className={classes} {...props} />;
    }

    // No default type, like the shadcn Button: inside a form it submits (the HTML default).
    return <button type={type} className={classes} {...props} />;
}
