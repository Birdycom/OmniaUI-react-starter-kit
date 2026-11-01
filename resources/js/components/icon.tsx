import type { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLElement> & {
    /** An OmniaCSS webicon, e.g. "mdi:cog-outline" or "material-symbols:home-outline". Find names on omniaui.eu/ui/webicons. */
    icon: string;
};

/** A webicon, bundled by vite-icons.js. 1.25rem unless a class sizes it (h-1 w-1, oc-sidebar-menu-icon, …). */
export function Icon({ icon, ...props }: Props) {
    return (
        <iconify-icon
            icon={icon}
            height="unset"
            aria-hidden="true"
            {...props}
        />
    );
}
