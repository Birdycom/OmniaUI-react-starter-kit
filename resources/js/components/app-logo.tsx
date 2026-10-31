import { usePage } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';

export default function AppLogo() {
    const { name } = usePage().props;

    return (
        <>
            <span className="app-brand-mark">
                <AppLogoIcon />
            </span>
            <span className="oc-sidebar-menu-label font-semibold">{name}</span>
        </>
    );
}
