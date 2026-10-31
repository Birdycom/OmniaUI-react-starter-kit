import { Link } from '@inertiajs/react';
import { mainNavItems, UserMenu } from '@/components/app-nav';
import AppLogo from '@/components/app-logo';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { dashboard } from '@/routes';
import type { AppLayoutProps } from '@/types';

/** Alternative layout: navigation in a top bar. Use it in layouts/app-layout.tsx instead of the sidebar layout. */
export default function AppHeaderLayout({ children, breadcrumbs = [] }: AppLayoutProps) {
    const { isCurrentUrl } = useCurrentUrl();

    return (
        <>
            <header className="oc-block-appbar app-topbar">
                <Link className="app-brand" href={dashboard()} prefetch>
                    <AppLogo />
                </Link>
                <nav className="oc-block-appbar-nav" aria-label="Main navigation">
                    <ul className="oc-navmenu">
                        {mainNavItems.map((item) => (
                            <li key={item.title}>
                                <Link className="oc-navmenu-link" href={item.href} aria-current={isCurrentUrl(item.href) ? 'page' : undefined} prefetch>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="oc-block-appbar-actions">
                    <UserMenu id="user-menu-header" compact />
                </div>
            </header>
            <main className="app-page">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                {children}
            </main>
        </>
    );
}
